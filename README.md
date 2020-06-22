# Kindred Notes

## Development

### Setup

#### 1. Clone this repo

```bash
git clone https://github.com/shwilliam/kindred-notes-web
```

#### 2. Install project dependencies

```bash
npm i
```

#### 3. Set up a Firebase

- [Create a Firebase project](https://console.firebase.google.com/)
- Enable [Firestore](https://firebase.google.com/docs/firestore/)
- Register a web new app

> **Note**: If you are unsure about how to set up permissions for your development
> environment you can start in "test mode".

#### 3. Set up Mapbox

- [Create a new access token](https://account.mapbox.com/access-tokens/create)
  with public scopes enabled
- Whitelist any URLs you intend to use **(Optional)**

#### 4. Copy `.env.example` to a new file, `.env.local`, and replace the placeholder values with those listed in your [Firebase console](https://console.firebase.google.com/) and [Mapbox dashboard](https://account.mapbox.com/access-tokens/)

### Testing

#### End-to-end

```bash
npm run test:e2e
```
