import * as math from 'mathjs';

function Solution(solution: {
  item: string;
  id: number;
  passSolution: () => void;
}): JSX.Element {
  const { item, id, passSolution } = solution;

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
    <div
      key={id}
      className="border border-inherit rounded-md p-3 cursor-pointer break-words"
      onClick={passSolution}
    >
      <div>{item} =</div>
      <div className="text-cyan-900">{computeInput(item)}</div>
    </div>
  );
}

export default Solution;
