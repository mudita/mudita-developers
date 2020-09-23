import { GithubContributor } from "./github-contributor.interface"

export interface GithubContribution {
  authoredDate: string
  author: { user: GithubContributor }
}
