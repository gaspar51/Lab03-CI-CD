
import { hello } from "../src/helo_world";
describe("test hello", () => {
 it("should return hello world", () => {
   expect(hello()).toBe("Hello world!");
 });
});
