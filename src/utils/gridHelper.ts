import classNames from 'classnames';

type Styles = {
  readonly [key: string]: string;
}

const desktopGrid = 24;
const tabletGrid = 12;
// const phoneGrid = 4;

export function getGridClasses(
  styles: Styles,
  index: number,
  // onPhone: number,
  onTablet: number,
  onDesktop: number,
):string[] {


  const [desktopFrom, desktopTo] = getFromTo(index + 1, onDesktop, desktopGrid);
  const [tabletFrom, tabletTo] = getFromTo(index + 1, onTablet, tabletGrid);
  // const [phoneFrom, phoneTo] = getFromTo(index + 1, onPhone, phoneGrid);
  console.log(`grid__item--tablet-${tabletFrom}-${tabletTo}`);
  return [
    styles[`grid__item--desktop-${desktopFrom}-${desktopTo}`],
    styles[`grid__item--tablet-${tabletFrom}-${tabletTo}`],
    // styles[`grid__item--desktop-${desktopFrom}-${desktopTo}`],
  ];
}

function getFromTo(
  index: number,
  fillColumns: number,
  totalColumns: number
): number[] {
  const to = index * fillColumns % totalColumns;

  return [
    (index * fillColumns - (fillColumns - 1)) % totalColumns,
    to === 0 ? totalColumns : to,
  ];
}
