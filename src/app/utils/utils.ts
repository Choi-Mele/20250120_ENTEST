
export default function joinClassName(...classNames: string[]) {
  return classNames.filter(Boolean).join(' ');
}
