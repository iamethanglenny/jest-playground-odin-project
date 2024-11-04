const caesarCipher = require('./caesarCipher');

describe("caesarCipher", () => {
    test("shifts letters correctly with wrapping from z to a", () => {
      expect(caesarCipher("xyz", 3)).toBe("abc");
    });
  
    test("preserves case", () => {
      expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });
  
    test("handles punctuation and spaces", () => {
      expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });
  
    test("works with large shift factors", () => {
      expect(caesarCipher("abc", 29)).toBe("def"); // 29 % 26 = 3
    });
  
    test("handles negative shift factors", () => {
      expect(caesarCipher("def", -3)).toBe("abc");
    });
  });