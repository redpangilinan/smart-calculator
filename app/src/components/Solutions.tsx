import * as math from 'mathjs';

interface Props {
  solutions: string[];
}

function Solutions({ solutions }: Props): JSX.Element {
  const handleItemClick = (item: any) => {};

  const computeInput = (input: string): number | string => {
    let result: number | string = 'Invalid';
    try {
      input = input.replace(/\s+/g, '');
      result = math.evaluate(input);
    } catch (e) {
      result = 'Invalid';
    }
    return result.toString();
  };

  return (
    <div className="flex flex-col-reverse gap-3 overflow-y-auto px-3 h-full">
      {solutions
        .slice(0)
        .reverse()
        .map((item, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(item)}
            className="border border-inherit rounded-md p-3 cursor-pointer break-words"
          >
            <div>{item} =</div>
            <div className="text-cyan-900">{computeInput(item)}</div>
          </div>
        ))}
    </div>
  );
}

export default Solutions;
