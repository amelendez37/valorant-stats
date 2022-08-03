import axios from "axios";
import { Gateway, LeaguePath } from "./models";

const API_KEY = "";

/*
  timestamp: epoch time
*/
export async function getMatchesFor(summonerName: string, timestamp?: number) {
  // make api calls from aws lambda
  const user = await axios.get(
    `${Gateway.Summoner}/${LeaguePath.SummonerByName}/${summonerName}`,
    {
      headers: {
        "X-Riot-Token": API_KEY,
      },
    }
  );
  console.log("user: ", user);
}
