import apollo_svg from "../images/svg/apollo.svg";
import lambda_png from "../images/svg/aws_lambda.png";
import gatsby_svg from "../images/svg/Gatsby-Logo.svg";
import graphql_svg from "../images/svg/graphql.svg";
import sentry_png from "../images/svg/sentry.png";
import tailwind_png from "../images/svg/tailwind-css.png";
import typescript_svg from "../images/svg/ts-logo-128.svg";
import react_svg from "../images/svg/react.svg";
import node_svg from "../images/svg/nodejs.svg";
import express_svg from "../images/svg/express.svg";
import mongo_svg from "../images/svg/mongodb.svg";
import astro_svg from "../images/svg/astro.svg";
import serverless_svg from "../images/svg/serverless.svg";
import netlify_svg from "../images/svg/netlify.svg";
import heroku_svg from "../images/svg/heroku.svg";
import aws_cloudfront_s3_lambda_svg from "../images/svg/aws-lambda-cloudfront-s3-combo-icons.svg";

import ss_mech_svcs_screenshot from "../images/ss-mech-svcs-screenshot.png";
import captains_lakefront_screenshot from "../images/captains-lakefront-screenshot.webp";
import daily_journal_screenshot from "../images/daily-journal-screenshot.jpg";
import brahmvanhouzen_screenshot from "../images/brahmvanhouzen-screenshot.png";

export function create_techs_icons_array(techs: string[]) {
  const techs_icons = techs.map((tech) => {
    switch (tech) {
      case "apollo":
        return apollo_svg.src;

      case "lambda":
        return lambda_png.src;
      case "gatsby":
        return gatsby_svg.src;
      case "graphql":
        return graphql_svg.src;
      case "sentry":
        return sentry_png.src;
      case "tailwind":
        return tailwind_png.src;
      case "typescript":
        return typescript_svg.src;
      case "react":
        return react_svg.src;
      case "node":
        return node_svg.src;
      case "express":
        return express_svg.src;
      case "mongo":
        return mongo_svg.src;
      case "astro":
        return astro_svg.src;
      case "serverless":
        return serverless_svg.src;
      case "netlify":
        return netlify_svg.src;
      case "heroku":
        return heroku_svg.src;
      case "aws":
        return aws_cloudfront_s3_lambda_svg.src;
      default:
        return "";
    }
  });
  return techs_icons;
}

export function get_image(imgKey: string) {
  if (!imgKey) return "";

  switch (imgKey) {
    case "ss-mech-svcs-screenshot":
      return ss_mech_svcs_screenshot;
    case "captains-lakefront-screenshot":
      return captains_lakefront_screenshot;
    case "daily-journal-screenshot":
      return daily_journal_screenshot;
    case "brahmvanhouzen-screenshot":
      return brahmvanhouzen_screenshot;
    default:
      return "";
  }
}
