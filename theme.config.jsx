export default {
  logo: (
    <>
      <span style={{ fontWeight: 600, fontSize: "16pt" }}>Dayjs Business Time Advanced</span>
    </>
  ),
  project: {
    link: "https://github.com/shuding/nextra",
  },
  search: { placeholder: "Cari dulu" },
  primaryHue: { dark: 120 },
  primarySaturation: 80,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: { component: null },
  editLink: { component: null },
  feedback: { content: null },
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },
  head: (
    <>
    <link rel="shortcut icon" href="favicon.png" type="image/png" />
    </>
  )
};
