import React from 'react';
import { configure, shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const myExample = {
   'title': "Work Example",
   'href': "https://example.com",
   'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   'image': {
     'desc': "example screenshot of a project involving code",
     'src': "images/example1.png",
     'comment': ""
   }
 };

describe("ExampleWorkModal modal", () => {
  let component = shallow(<ExampleWorkModal example={myExample} />);

  let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
      expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
      expect(anchors.getElement().props.href).toEqual(myExample.href);
   });
});