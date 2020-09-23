import { GithubContribution } from "./github-contribution.interface"

export interface GithubContributors {
  repository: {
    object: {
      history: {
        nodes: GithubContribution[]
      }
    }
  }
}
