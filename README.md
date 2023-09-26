# gql-error-handler

<h1 align="center" style="color: #ff347f" style="font: 'Roboto Mono'">
  <img width="100"  src="./assets/logo.png">
  <br>gql-error-handler</br>
</h1>

[gql-error-handler](https://www.gql-error-handler.com) is a Javascript library that returns partial data upon validation errors.

## Features

- **partialDataPlugin:** A Javascript function that reformulates queries that would otherwise be invalidated by removing invalid fields and allows developers to use partial data returned.

  - Functionality is supported for queries and mutations with multiple root levels and nested fields up to 3 levels deep, including circular dependencies
  - Implement core functionality through utilization of a single plugin in an `ApolloServer` instance

## Setup

- In your server file utilizing Apollo Server, import or require in `queryAdjusterPlugin`
- At initialization of your instance of `ApolloServer`, list `queryAdjusterPlugin` as an element in the array value of the `plugins` property

```javascript
const { ApolloServer } = require('apollo-server');
const queryAdjusterPlugin = require('gql-error-handler');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [queryAdjusterPlugin],
});
```

## Installation

```javascript
npm i gql-error-handler
```

## Future Considerations

- Extend handling of nested queries beyond three levels of depth
- Develop GUI to show logs of previous queries and server response - Link to other repo?????
- Add authentication and other security measures
- Handle other types of errors in GraphQL

## Contributors

- Jeremy Buron-Yi | [LinkedIn] | [GitHub](https://github.com/JEF-BY)
- "Scooby" Wooby "Doo" Kim | [LinkedIn] | [GitHub](https://github.com/woobaekim)
- Samuel Ryder | [LinkedIn] | [GitHub](https://github.com/samryderE)
- Tiffany Wong | [LinkedIn] | [GitHub](https://github.com/twong-cs)
- Nancy Yang | [LinkedIn] | [GitHub](https://github.com/nancyynx88)

## License

Thank you for using gql-error-handler. We hope that through the use of our plugin, your GraphQL user experience is improved. Should you encounter any issues during implementation or require further information, please reach out to us for assistance.
