import axios from "axios";
import { Gateway, LeaguePath } from "./models";

const API_KEY = "RGAPI-88cb2551-0818-4eb3-a31e-a022f4c58e2a";

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
