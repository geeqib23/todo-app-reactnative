import {
  observable,
  computed,
  action,
  makeAutoObservable,
  makeObservable,
  decorate,
} from 'mobx';
import {observer} from 'mobx-react-lite';
import React, {createContext} from 'react';
import {useContext} from 'react';

export const test = observable(
  {
    key: '0.213124',
    value: 'Hello MobXqwdun',
    setTest(val) {
      this.value = val;
      console.log(this.value);
    },
  },
  {
    setTest: action,
  },
);

export default class Store {
  data = observable([
    {
      key: '0.213124',
      value: 'Hello MobX',
    },
  ]);

  // constructor() {
  //   makeObservable(this, {
  //     // test: observable,
  //     data: observable,
  //     submitHandler: action,
  //     deleteItem: action,
  //     // setTest: action,
  //   });
  // }

  submitHandler(value) {
    console.log(this.data);
    if (this.data === undefined) this.data = [];
    if (value) {
      this.data.push({
        value: value,
        key: Math.random().toString(),
      });
    }
    // this.data = [value];
  }

  deleteItem(key) {
    this.data = this.data.filter(todo => todo.key !== key);
  }
}

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({store, children}) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
