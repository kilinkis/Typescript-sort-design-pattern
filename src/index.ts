import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// numbers
const numbersCollectionObject = new NumbersCollection([10, 3, -5, 0]);
numbersCollectionObject.sort();
console.log(numbersCollectionObject.data);

//chars
const charactersCollection = new CharactersCollection('kilinkiS');
charactersCollection.sort();
console.log(charactersCollection.data);

// linkedList
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();