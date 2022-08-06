### Oslash Demo

---

This demo project is built on typescript & react, 

most of the components are build on [Atomic Design Pattern](https://atomicdesign.bradfrost.com/chapter-2/)

Atoms:
1. button and its flavours
2. dropdown
3. panel

Molecule:
1. Select built on Dropdown
2. tag input
3. Access dropdown uses Select
4. Select Group for person &  group type
5. Autocomplete

Organism:
1. Search Panel
2. Share Panel

could have been better:
* convert the code in to typescript generic 
* move some of the state to global store

---
P.S: this demo project uses Zustand for state management for inter component communication