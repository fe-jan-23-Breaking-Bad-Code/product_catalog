import React from 'react';
import { Component } from 'react';
import { Phones } from '../../../types/Phones';
import { PhoneCard } from '../../Card';
import styles from './Carousel.module.scss';
import { getNextFrame, getPreviousFrame } from '../../../helpers';
import { PaginationButton } from '../../PaginationButton';
import {
  LeftBtn,
  LeftDisBtn,
  RightBtn,
  RightDisBtn
} from '../../PaginationButton/AuxiliaryButtons';
import { Description } from '../../../types/AuxiliaryButtons';
import classNames from 'classnames';
import { RecommededTitles } from '../../../types/FeaturedPhonesTitles';
import { CartItem } from '../../../types/CartItem';

type Props = {
  title: RecommededTitles;
  phones: Phones[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
  favourites: string[];
  cart: CartItem[];
};

type State = {
  currentFrame: number,
  inTransition: boolean,
  hasNext: boolean,
  hasPrevious: boolean,
};

export class Carousel extends Component<Props, State> {
  state: Readonly<State> = {
    currentFrame: 0,
    inTransition: false,
    hasNext: true,
    hasPrevious: false,
  };

  timeoutId = 0;

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  handleNext = () => {
    const {
      step,
      frameSize,
      infinite,
      phones,
    } = this.props;
    const count = phones.length;
    const { currentFrame, hasPrevious } = this.state;

    const nextFrame = getNextFrame(
      currentFrame,
      count,
      frameSize,
      step,
      infinite,
    );

    const hasNextFrame = getNextFrame(
      nextFrame,
      count,
      frameSize,
      step,
      infinite,
    ) !== nextFrame;

    if (!hasNextFrame) {
      this.setState({
        hasNext: false,
      });
    }

    if (!hasPrevious) {
      this.setState({
        hasPrevious: true,
      });
    }

    this.setCurrentFrame(nextFrame);
  };

  handlePrevious = () => {
    const {
      step,
      infinite,
      frameSize,
      phones,
    } = this.props;
    const count = phones.length;
    const { currentFrame, hasNext } = this.state;

    const previousFrame = getPreviousFrame(
      currentFrame,
      count,
      frameSize,
      step,
      infinite,
    );

    const hasPreviousFrame = getPreviousFrame(
      previousFrame,
      count,
      frameSize,
      step,
      infinite,
    ) !== previousFrame;

    if (!hasPreviousFrame) {
      this.setState({
        hasPrevious: false,
      });
    }

    if (!hasNext) {
      this.setState({
        hasNext: true,
      });
    }

    this.setCurrentFrame(previousFrame);
  };

  setCurrentFrame = (nextFrame: number) => {
    this.setState({
      inTransition: true,
      currentFrame: nextFrame,
    });

    this.timeoutId = window.setTimeout(() => {
      this.setState({
        inTransition: false,
      });
    }, this.props.animationDuration);
  };

  inVisibleArea = (index: number) => {
    const { currentFrame } = this.state;
    const { frameSize } = this.props;

    return index >= currentFrame
      && index < currentFrame + frameSize;
  };

  render() {
    const {
      title,
      phones,
      frameSize,
      itemWidth,
      animationDuration,
      favourites,
      cart,
    } = this.props;
    const {
      currentFrame,
      hasNext,
      hasPrevious,
    } = this.state;

    return (
      <div className={styles.content}>
        <header className={styles.content__header}>
          <h1
            className={styles.content__title}
          >
            {title}
          </h1>

          <div className={styles.content__slider}>
            {(hasPrevious)
              ? (
                <div
                  onClick={this.handlePrevious}
                >
                  <PaginationButton
                    image={LeftBtn(Description.MoveLeft)}
                  />
                </div>
              ) : (
                <div>
                  <PaginationButton
                    image={LeftDisBtn(Description.MoveLeftDis)}
                    isDisabled={true}
                  />
                </div>
              )}

            {(hasNext)
              ? (
                <div
                  onClick={this.handleNext}
                >
                  <PaginationButton
                    image={RightBtn(Description.MoveRight)}
                  />
                </div>
              ) : (
                <div>
                  <PaginationButton
                    image={RightDisBtn(Description.MoveRightDis)}
                    isDisabled={true}
                  />
                </div>
              )}
          </div>
        </header>

        <div
          className={styles.carousel}
          style={{
            width: ((frameSize * itemWidth) + 48),
          }}
        >

          <ul
            className={styles.carousel__list}
            style={{
              transform: `translateX(${(-(itemWidth + 16) * currentFrame)}px)`,
              transitionDuration: `${animationDuration}ms`,
            }}
          >
            {phones.map((phone) => (
              <li
                key={phone.id}
                className={styles.carousel__item}
              >
                <div
                  className={
                    classNames(styles['carousel__phone'],
                      {
                        'carousel__phone--visible':
                          this.inVisibleArea(Number(phone.id)),
                      })
                  }
                >
                  <PhoneCard
                    phone={phone}
                    isInCart={cart.some(({ id }) => id === phone.id)}
                    isInFavourites={favourites.includes(phone.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
