import AppConfig from "./config/AppConfiguration";

test("uses the current Magnus screenshots on the poker and iOS pages", () => {
  const screenshots = [
    "Magnus-01-1284x2778.png",
    "Magnus-02-1284x2778.png",
    "Magnus-03-1284x2778.png",
    "Magnus-04-1284x2778.png",
    "Magnus-05-1284x2778.png"
  ];
  const iosMagnus = AppConfig.pages.ios.sections.find(section =>
    section.title?.startsWith("Magnus Poker")
  );

  expect(AppConfig.poker.images).toEqual(screenshots);
  expect(iosMagnus).toMatchObject({
    assetsFolderName: "IOS/Magnus2026",
    images: screenshots
  });
});
