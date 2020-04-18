import transformBookInfo from "./book-info";

describe("Transform Book Info", () => {
  let actual;
  let expected;

  it("transforms book info correctly", () => {
    actual = transformBookInfo({
      items: [
        {
          volumeInfo: {
            title: "1984",
            authors: ["George Orwell"],
            imageLinks: { thumbnail: "some-url" },
          },
        },
        {
          volumeInfo: {
            title: "Today's Night",
            authors: ["Jamshed Bhabha", "Kanu Lal"],
            imageLinks: { thumbnail: "some-other-url" },
          },
        },
      ],
    });
    expected = [
      { title: "1984", by: "George Orwell", imageUrl: "some-url" },
      {
        title: "Today's Night",
        by: "Jamshed Bhabha,Kanu Lal",
        imageUrl: "some-other-url",
      },
    ];
    expect(actual).toEqual(expected);
  });

  it("transforms null response accordingly", () => {
    actual = transformBookInfo(null);
    expected = {};
    expect(actual).toEqual(expected);
  });

  it("transforms partial response accordingly", () => {
    actual = transformBookInfo({
      items: [
        {
          volumeInfo: {
            title: "The Japan Book",
            imageLinks: { thumbnail: "some-url" },
          },
        },
      ],
    });
    expected = [
      { title: "The Japan Book", by: "Anonymous", imageUrl: "some-url" },
    ];
    expect(actual).toEqual(expected);
  });
});
