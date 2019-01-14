# Redux template

Just a simple example to demonstrate redux.

# Start developing
```bash
npm install
npm run start
```

# State model
```javascript
{
    hero: {
        currentState: 'idle',
        statistic: {
            hp: 100,
            maxHp: 100,
            attack: 10,
            defence: 10
        },
        position: {
            x: 1,
            y: 1
        }
    },
    monster: {
        currentState: 'idle',
        statistic: {
            hp: 100,
            maxHp: 100,
            attack: 10,
            defence: 10
        },
        attack: {
            positions: [
                {
                    x: 1,
                    y: 1
                }
            ]
        }
    }
}
```