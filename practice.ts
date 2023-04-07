const last = <T> (arr: T[]):T => {
    return arr[arr.length -1];
}

const v1 = last<number>([1,2,3]);
const v5 = last<number | string>([1,'a','b']);

const makeArr = <T, Y>(x: T, y:Y): [T, Y] => {
    return [x, y];
}

const v = makeArr<string | null, number>('b', 5);
const v2 = makeArr(5, 5);

type objNames = {
    firstname: string;
    lastname: string;
}

const makeFullName = <T extends objNames>(obj: T) => {
  return {
    ...obj,
    fullname: obj.firstname + ' ' + obj.lastname,
  }
}

const v4 = makeFullName({firstname: 'bob', lastname: 'junior', age: 15});

interface Tab<T> {
    id: string,
    position: number,
    data: T,
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;

 

