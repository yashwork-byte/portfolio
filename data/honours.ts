export type Honour = {
  title: string;
  detail: string;
};

// "Trophy cabinet" — real achievements from the résumé.
export const honours: Honour[] = [
  {
    title: "Top 100 in the world on Codeforces",
    detail: "Finished under rank 100 globally in Round 970. Rated Specialist at 1590.",
  },
  {
    title: "Global rank 53 on CodeChef",
    detail: "Round 144. 4-star, rated 1892.",
  },
  {
    title: "Runner-up at Hackfest, IIT (ISM) 2022",
    detail: "Second place at the hackathon run by Atlassian.",
  },
  {
    title: "800+ problems solved",
    detail: "Across Codeforces, CodeChef and LeetCode (rated 1686).",
  },
  {
    title: "Top 1% in JEE 2020",
    detail: "Top percentile in both JEE Mains and JEE Advanced.",
  },
];
