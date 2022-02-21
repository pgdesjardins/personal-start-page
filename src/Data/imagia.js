const evidensIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACD0lEQVQ4jYWTT2gTQRTGfzPJpjWR6CFG8SKKgu0ltlQtKLX1Eg2KUhT04lE8CPXixdP2pEcPivTUi0KNKDYrFf9ASCEBIYKVNDVBsBdJKS2FaCRsk50edrvddAt+lxlm3rzv+957I/BCKYkQACdI3eynOHuc5d8r9PRX+FWp02zkgSYgANXxFl1JIMqzdzeY+vKBshqjpBIAzPw8Q2+iD7gNxPBB1yUAL/JXyJS+Mbva67kNePb7gTEg6qhwpQt0JTEWvvO2lASgqDSUEq41hoOgBHASOOhXMT3fR2Y+A0A6bbPq2aAvbujSMeDOpjrpBgmuoiih65K1I7YlfaRFurgHoxIjt3SYwup1Tp07C7QdNR4fb+biaKEyP8xD3E80SKsAkcpDpLxGq/WXXZHnhLq+MnRgN6FQFdNc2EpgexW8r35EWRGsxmWIvESIvWjBi7RXmqQG6w7VA2ASqAHYUoVQgGJyLoklGoTjNVAjFGunSR5dJjVYR88GnVbngR4nmfQXE2CmamCUpwDhFnQLcWAcu5WyM8NmcMs0UNYioPi8Jh2rEugCbgEF7IncNo1ZpyOZ0iM+LSomjPA29vOAd8jw9xlABsJoWoG7o4+R8g+WNQ0sAQPABPZ0tv0JcjkLEERjr7k32mZ93aS7+ynN5j7gAvAE+LcjqZffWV8Bw/8L3gn2v9C0ASDinnV+KhcbtNawtXud8n4AAAAASUVORK5CYII=";

export default {
  name: "Imagia",
  links: [
    {
      title: "Imagia",
      url: "https://imagia.com/"
    },
    {
      title: "Lucid Chart Dashboard",
      url: "https://lucid.app/documents#/dashboard",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jVWTzY8VRRTFf+dWv9cwi3GEhIRBI3FGCMoG0K0JIcMILty4NDFxITEuXOj/4EJDQjTAAgg7AnEvccXHP8KHOz4yMI83Pf1e1XHR3TNYSaWqbuWec++pU1pZOf5+2ltfxV4XhG0iQrYtSQDDvpRiSRiK4J95015IB5bfuxMR52wbmy5JpJTIOctdDABJuAuQIo6Q4ljYXiulZEFIUkQQITY2NiSJ0ajirWJQt4tcSsY+Gz1lDAzTrSmvXr/W+XPrvnHtCu8sLjKfzw3INsMYCCsNAUltO/NHKyv65eefvL52RpM3b5jN5h2rNJRhSXKPVvUHIsLTral+/OF7r6+dUc6ZrekWEYERtv+XPPQUPZKxJeT5fK6cM1InJAaZQUgBHlbbjh5RSEOpRAR0qFjdVHe/I2i/qhrEk/sEdtjAEAqqlJhsTiDE3j17GMS0vdtC3+GOzMWmuNBsb/Ps+XNOn/6c7779hqZpPPgL6FoApA5DkpxzJkWwsLDAoeWDXPztV25ev8pnn57y9nariDCd51R5twSZYpeilBKbmxNu3f6LPy/9zuHDHwB4MpkoImxbFsbuDcSuTaqq8r37D/nyq6996Y/L7Nu/j5yzAY1G497J8o5/jnx8ItMFopTCoeWDPHn6L+1spneXllhd/ZAqJRThly9e8ujxE1JKGAq2dPSTk38r4ov+P6htW43HYyKCnLOapqF070xKQV3XNjhFpFzK3bS0uP+BqnQUWMWO0WjEW+5UXdfU9Zi6rpVSoveMgbu5aS/8ByJ2StV05lfsAAAAAElFTkSuQmCC"
    },
    {
      title: "Kafdrop: Broker List",
      url: "http://localhost:9000/",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsklEQVQ4jZVSz2tcZRQ9537fe28mMzYzSVNjm0JFoqtGCV00uEiLdCGK0IUbQZcupH+Bq/4DbrrQhQiu3MSFSxFsCqGllLTQSUs3YilI0rQTm6adybx577vHRVtBpQsvXO7i/LjnwiX+Z0kgCV3feG+BWSvnv8GVFdh/VB8DM5fA06dRA8Ba75Mu6xvfhzD1c3zBWV1FJFEDSC/bvr7+eTZE7zjrW18UjfTReDze/0eC27fP57v1Lx2lnQhMIC+iDwYDtJqtbPvhcKrbyU+I4w9iqM6WZZWybPL63wZrveNdeuOMVC4AVZuigVYKycHYofyYKy1ksZ6tKq8lhRDaDwgAN3/79NDTvZsXkvaXCBx0KQdAGmoIApADoiSSQHLIKAabqCMADPZ63zj2PyRTbkYYBIAAFJ5PuAPuQB6lnUHAgYYr2DjEi1eWlmv1z4aQmBKUkiRBgEACkChALqARYZu7gZUTwSAJtIl2+sy9YkpIAEGSZjQzmkATQRKhiAh7I/DuTlAzCkaRzKtY1+VJ0lxiIKHkICHg+RHBBAfwZGTa2AoIJr7ScD3Dsy0jkQMyMwkQCYF81maCRPSfBly7F7m5S87PJBWZJJFGuxrBcCua3sgiRYhGgARGFfFoQPzeN/Q2IzITludrdCaEOkEhEMxbK1Fqfvt41Dz1aFC1k7MajsnHQ7I/NPyxS0riXFd450iNua48SR4jCnmxsb5arsZX24u/3tla+/ryPftyJEYJiCZkQZjuCEcmHYtHEw5POhIQ8kaOPx/yfozNr86du7ZDADh1/v054cFFV/XkUNv96JTyY9OpmJ/xYrKpLNBRJhOAQbS4jdT84d0TB74DLqUIAItvzXK7n35cfjNdWXod5SjZQfr+4bKqXpN8ukpDFFlRWWjdaaTZn95eXLn74tP+Ah2iW8nymIC+AAAAAElFTkSuQmCC"
    },
    {
      title: "Evidens (local)",
      url: "https://0.0.0.0:8082/",
      icon: evidensIcon
    },
    {
      title: "Mongo Express (local)",
      url: "http://localhost:8081/",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACvElEQVQ4jV2TT4jVdRTFz7nf9/u9N2/mOUMQ4uL1x1Fx0WbIjYuhacysRVAos5qFIIq4E1y5GoL+0KZN24qwIi0l2kQG08zsDEEZzECFJhQsBp3wPebN/H6/e0+L54tH5y7u7nD5nHOJgRZgWEBMX57eVePoPMHDCkwKMkv8MyotBf2rlWM/38WQOLQ1c+XI6WR2HmRbLsgFCGAiWCMUegTi48W3f3xvYJCwAMMS9OqVNz7KGtn73ovxKL2UAwYDQYVHqApXYKzWzGafPza5b+3vez/gOJCwBL1y6fVTWTP7oOiUBQTAmACw5z06nMkSYTQJim0v8lY21Z7abWtn7i1y+sL0rlpj7AagZ+USgJQsxcbWBk+8dJydooOLdy7rmcYEXAEJoiForBR+sGb1kXlm3BlbUYFIRlO36PLAzpd5ZuoUCi+0un6LfzxZ00g2gkAQAVluDS/jtNHsCEICQJIgiSoqvrP3LUlCnnLO7T+q7aog2WcuIHnpIu21GoEX5QIIoyiXs5k11R5rEwAkYe/EJEfzpjwcAEGKCCCgtgmyga0gEIQr4HLofzOcuyRAMgNwv88cIYhGw1bZ469/XZfRYDSsrv+mzaLHxNS3EtTvhj00iItMRggiiUCgVW/py9vf8Paj33W/80Bf3LrA0bypQAxOCKslgljhwUszexrWuB6OFiSQoNHQLbrYMzHJZm0EN9dXNV4fh8tBUILCMmNV+mx68O3a4xfmdqe8lR+KbS8EGijmlqNTdrCxvYE85X0+ogJR5jvqeRTVp8tzVz8xLMCWLl79sNqsvs7G87pBQKAKSU/ZQn2GLkj5jrzuvWplc+ufcxA4gAoANvv9m+8ycBbGphfxFHU/OcsTIFUiPt/sPj53bf7ak+FU/tPMd4cPCDxpTIei9OdIEokPYViW9Nny0Z9+Gf7gfwGeLXhkR4FXtwAAAABJRU5ErkJggg=="
    },
    {
      title: "Evidens UI · GitLab",
      url: "https://gitlab.com/imagia/evidens/service/evidens-ui",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACtElEQVQ4jU2TT2hcZRTFf/f7vvdeJxObgt2UgknTmSb+C6gLwRadUWkqumjAQbqouNCNWJduna4E/0C2gouSnZOl0G0GXIgg1U2z0UpMXLZWifkz773vOy6mk7i4cLicc7n3cA/9Pg5g5+X59s7y0y2Afh8nyY4LkzCArcsL57Zffeb8hOc+HXYcQPLZB6rihwCvPOox1gAw7HY8gIv2kaz+ZMILNhzWAr9jtgJWCpwNhxEDSYBhJsBqAIkrIAfQHQ5rB7DdbS2a2Tzoya1OewmQ+jdtvIEYY/i9u7Bg0A5mF7Zebz0HEADM+6tNby7J2I/pNeAX7g4CN6nB2Lz7VBBUfzp7Z8q7zIA6hivAzwEgHrJcFkoIYu17wFe2vlmyPnFgswTYqulWUsJAJW8JPrfR13OL5Z38R9uzhpwEaPeBfVftcej82MUUUTElP32aFYGzZJYaKk88W10M7rH82vQlO6mfUoXILRO+zN7eP3T4IAASxvRMIj9dkaJhqLIXrJmKsOwo9SYN6jiLYkVKlYlmHO2lWO1Wqndr1f+mWMZGPEzRlEakNItUEDnkfYcjAwt2Bmdnqakgm1KW5ViSghIhK3B5UzkjsLPUnMGZmU8IF6qHl9JB/Y0PLnCOXDOMvLDipEAmJOXTwglLpyhtnsxnLqQy3QqhfPHo1cq19ns+Z9VVNqM7Gh38Zf7+tvNm6PHZFE+cUnLPuyJl+kdV/Dhcv7cG4CRMg57P3/31Vv336CVlfG9LrsibyAVq86hoYG7JFQrph/p+uhiu31vToOfV7zvGQZFpoxMA1MPH9fYXWm3r4cqiHlxdlFbbqr5tfbnRGT+eNjphEjKOAKBBzx/h263L+zcu/LZ/Y+EP3T7/xuRUDXr+USZMkh1vII2FkmmABzhYnX/i4LO5ubGQ4+H/i/p/D6l15+tCNJQAAAAASUVORK5CYII="
    },
    {
      title: "Scrum Board",
      url:
        "https://gitlab.com/imagia/evidens/service/evidens-ui/-/boards/2752583?scope=all&label_name[]=Any",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACtElEQVQ4jU2TT2hcZRTFf/f7vvdeJxObgt2UgknTmSb+C6gLwRadUWkqumjAQbqouNCNWJduna4E/0C2gouSnZOl0G0GXIgg1U2z0UpMXLZWifkz773vOy6mk7i4cLicc7n3cA/9Pg5g5+X59s7y0y2Afh8nyY4LkzCArcsL57Zffeb8hOc+HXYcQPLZB6rihwCvPOox1gAw7HY8gIv2kaz+ZMILNhzWAr9jtgJWCpwNhxEDSYBhJsBqAIkrIAfQHQ5rB7DdbS2a2Tzoya1OewmQ+jdtvIEYY/i9u7Bg0A5mF7Zebz0HEADM+6tNby7J2I/pNeAX7g4CN6nB2Lz7VBBUfzp7Z8q7zIA6hivAzwEgHrJcFkoIYu17wFe2vlmyPnFgswTYqulWUsJAJW8JPrfR13OL5Z38R9uzhpwEaPeBfVftcej82MUUUTElP32aFYGzZJYaKk88W10M7rH82vQlO6mfUoXILRO+zN7eP3T4IAASxvRMIj9dkaJhqLIXrJmKsOwo9SYN6jiLYkVKlYlmHO2lWO1Wqndr1f+mWMZGPEzRlEakNItUEDnkfYcjAwt2Bmdnqakgm1KW5ViSghIhK3B5UzkjsLPUnMGZmU8IF6qHl9JB/Y0PLnCOXDOMvLDipEAmJOXTwglLpyhtnsxnLqQy3QqhfPHo1cq19ns+Z9VVNqM7Gh38Zf7+tvNm6PHZFE+cUnLPuyJl+kdV/Dhcv7cG4CRMg57P3/31Vv336CVlfG9LrsibyAVq86hoYG7JFQrph/p+uhiu31vToOfV7zvGQZFpoxMA1MPH9fYXWm3r4cqiHlxdlFbbqr5tfbnRGT+eNjphEjKOAKBBzx/h263L+zcu/LZ/Y+EP3T7/xuRUDXr+USZMkh1vII2FkmmABzhYnX/i4LO5ubGQ4+H/i/p/D6l15+tCNJQAAAAASUVORK5CYII="
    },
    {
      title: "Rancher",
      url: "https://rancher-ha.imagia.com/g/clusters",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjklEQVQ4jZ2SPWgUURSFv/N2Iv4kuwkiQkhlZRMEsQ2IoIU2aSJrSGUR+2TTStqI2BoFK0EGLGwECWhjZSVYiWghJhskKYRoSDaTecfCmY2rmUU88OBd7n3fPffyRKn5J5dRGOdu8x7/ooV0iuixhFa6QPRbxHngGq20hhUBCFHdB5YQ7/gcXvH0eo45jcKEaKUGXiBWMbOAK3oK+IDjJNY2NZawziVFcpNIA3ULqxh1FGYQTcwZ0GYBcAexAvpRVNaBq8CJXoCFaGM9Q9SI/lQANAWcBcciPgkcPWQIEeJrlqbvgwVyOcIwMPGb+06fXZQ0A4SK5Eug3R/wSxUAbwB7/w8QOfD9b64yonvACeY5wsAQcAEYxJzCPAI+ItWQO5iI/YZ8YK0XsBNucHzXZMkgR8IyZhK4ghjBbIG32M9v0xj9wuLFvFzegdlSsw8GGKovI938w/hXApe403zffwejI0Lq8wsP1wFg/ZuBnSLKi2PMLlnIqgBJ9/bwVsZc+hi53XViCVilcWy9CvATkPyBkhudBJEAAAAASUVORK5CYII="
    },
    {
      title: "Kibana (local)",
      url: "http://localhost:5601/app/kibana#/home",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABd0lEQVQ4jZWSuy9DARTGv3Pv7dVWg4pEPSI6lMUjHolO3tpEgolF1EDaSA1EQmJBYkMisZBiEItBUm6RCLfEJOJ/6KY2Kl6LY+CKx231ftPJd/L9ck7OIXzqrnuVkb5uWWC3PTwSkwyEND0RC105YX8MAASD4Tdm6s9W/FeaYQjATBN2JRD+7qUNYMKKXQks//bTAhBDyamJj+n2tKLZ7WGHaEOBmIkKOQ8dZieyBBlgun55tTQ5jn2PKQH1DS0/zmgiAT1WV2LUXFluOwzGk02XdAUZIhPTgG287BlnkV5DAAkCvFbn5NTC0BGkl10w70BVfGkD2i3OjWl1bREPNyEAbQAIhE2o+33/AhrNxRfzZ+vDiCozAAa/tUQQbeNU8SQF1Mr5saXzrSZEI4MAZnWGM0HAnC7AJdnvq8XcSlIjrQCH9Fb7lBsne1V/ADUZRXXBmc5SEO8CMKUAAJIY0MqvP0D0wAF6uwSjJGX4I5XAq1wIr/fxHfePZByGn0zuAAAAAElFTkSuQmCC"
    },
    {
      title: "JumpCloud User Portal",
      url: "https://console.jumpcloud.com/userconsole#/",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABf0lEQVQ4je2RT0tUcRSGn3PuvWNOGpqKjutsYpRAEcUPoIKgC4sIWvgZWrjvU7RwJfgBwkYQIWhlEISKGcwg4z908M5lfouGnMnp3uNGwcBF+3yXL+/7nMM5cC+5y3xnpsOV8oSHTiVQ89EPM729pX8G5MPyFMgykLkOfTVsmUQKdee+vBocvLzJ+reLq1HUrvZnWpG3Zpax6wmNOB73RMYDlZ/prs5FYOmvDVbD8LmYjakwdpnEC9V6PfWoJcXDIMVOJWT9sER7qoWXA1n62tr2MHtvnn2e7e4vyMfobEQTXTHIGZAv7fPp+IhcVzevn+VY2t3mexQBMD+Q5cXTLIkZwBaevfHFdMIgCxAnCUXncI0GRee4aDZJ+wEqgoqQDvzbRxuSmFEVbBehLEB48YtmEqMieCJsnp1yWqshIgiwXQkpOHcDOYnFfvjfejKbo+fnC7HY5MZBKSi6Kp4o1UadtYN9AFQUA/aiCo8ftPKko+O3ia3P9fTv3PXF/01Xf3KZvbmaHXcAAAAASUVORK5CYII="
    },
    {
      title: "Evidens – Figma",
      url: "https://www.figma.com/files/974763236539932814/team/",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACd0lEQVQ4jW2TO4hVVxiFv7X3OffMuTnzYK5jYYgEjQ9GEDRNElQEU2RIZTH2kTysLNMFbpdSxMJC0EoLp7EJFmGSIQkMRETLVBECSSDj5M7jPs49j/2nmJk7Zmb+6mfzr7XXv/ba4oBanZue2Omn35sbnevOw429swIwkMDW5g4fj+Ox2zX2AWbgImXvXkJRZNvzLwj5V7r16PcdjNtmscfgXdS432y4T4VaXrQiaVpe08i1MFqk6cfQuGtt3I6CUXP5Mqmh84MyFGbUZcAqI1iwQLBgUJPnBegj/plvCmxEYKCZJfqGltPYNURlngpZ5eS9wzmnuvIkSaPGvWBlYbBPgSBMVn9cz4vh97WmfOmmrHBTkPfXKIdr3SQz+r2n/tXLz7RAbdv+RVtgA8Q3WHKiSRXTNeeQL1lZPP3n1R9Ovv0t8hdWo7SxOqDiiUaYbQWyecyfnKwfTI4xl1vmCjL1XJZ8d+zU7c5UdrGjtE4nuXIkru/RtoNNBH+uW1jpvAVXmw0Tm4gd77tuKGOCwjqFyX3I7EoTZG8QmFaW6AfZctZQ7CuZk5T11VFty27CxYacJmgAz1lY2m9iG4Xx3/RFr8di3izUS4cMx8riyN/ljXrTFuW1ETZ5WtXF5yxcqzHTKIkYW6789eXR5PU7d5uD5BMJZ4GNzvjXM5yhOPSLjb++oM0DowzA43mfHj/7ow69dbHqbFTyPrKqWi+y1lFO3Nz9A2ZC2on21jMCcGYmpbBzrA9KHyInKRiRp/g3/P/KXfCuB4aYPdw342eyJEahJkucYc+Ypb9X9n4CALVDbuGmbea/4l0UuvlPpnADtQP2xqp76j8hqhLIlsa+QwAAAABJRU5ErkJggg=="
    },
    {
      title: "Aha!",
      url: "https://imagia.aha.io/products/CRP/feature_cards",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5klEQVQ4jW2TPW7VUBCFv3Pt5OXnIVBCQCCRAkHFDqhZAQU1NR0gIdaAqNgAS2ABFCwh9CmAhCIEUP5fYj/fORTXfjwibMmyZ3xmzj1nRjz//ITEG+AONoCwocliQSyPKpZqcdjYJY2RAHYJXokXW99I1SaRo4BhqRbPHq7pwa1l7l1fJIDH77/64CxDUimSqkTknRqYgSVwNuNRxetHN9kYLwKw/fOciEIOFQ49ZjMBHmjbCImmC30/nJIjyGF+nHS0OTQcYHZUcE0JD0+jUBeVJ9NQUgLguMm0ueRQKg37cjWDMCUikKc5dNoEUkkenwc5h0g9GLnHkVB/44GFujCnbfTExGQaEJ7rGwOq53j5CjhrY/Z50ZkiUN+22AhAPXvrTQaBg0kbRB9ruugJau6/ywUkkBDGYbowaa4TLvPjS0VqZnII7CJUZO0etOweNjSd+fK7LRZZLudPHoqIl1v9BBqQwRL49tVaV0YJW+ydTDmahKkkwvPU5mx070mH18dJH57eZW0lsVgn3n7a593HPaXVRYesv6yLBgICSTK2TZ2S72+MdG25SHRjXIM1+DyADaQa2BmWqTgtpmG2f12wsbrAQiX2T7si0ZykwzLpf+ssYH0lqRIkiaM2M2nsMjb+Z53/AD02EdllgrNqAAAAAElFTkSuQmCC"
    },
    {
      title: "DEV - Mongo Express",
      url: "https://mongo-express.dev.hq.imagiaops.com/db/evidens-ui/",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACvElEQVQ4jV2TT4jVdRTFz7nf9/u9N2/mOUMQ4uL1x1Fx0WbIjYuhacysRVAos5qFIIq4E1y5GoL+0KZN24qwIi0l2kQG08zsDEEZzECFJhQsBp3wPebN/H6/e0+L54tH5y7u7nD5nHOJgRZgWEBMX57eVePoPMHDCkwKMkv8MyotBf2rlWM/38WQOLQ1c+XI6WR2HmRbLsgFCGAiWCMUegTi48W3f3xvYJCwAMMS9OqVNz7KGtn73ovxKL2UAwYDQYVHqApXYKzWzGafPza5b+3vez/gOJCwBL1y6fVTWTP7oOiUBQTAmACw5z06nMkSYTQJim0v8lY21Z7abWtn7i1y+sL0rlpj7AagZ+USgJQsxcbWBk+8dJydooOLdy7rmcYEXAEJoiForBR+sGb1kXlm3BlbUYFIRlO36PLAzpd5ZuoUCi+0un6LfzxZ00g2gkAQAVluDS/jtNHsCEICQJIgiSoqvrP3LUlCnnLO7T+q7aog2WcuIHnpIu21GoEX5QIIoyiXs5k11R5rEwAkYe/EJEfzpjwcAEGKCCCgtgmyga0gEIQr4HLofzOcuyRAMgNwv88cIYhGw1bZ469/XZfRYDSsrv+mzaLHxNS3EtTvhj00iItMRggiiUCgVW/py9vf8Paj33W/80Bf3LrA0bypQAxOCKslgljhwUszexrWuB6OFiSQoNHQLbrYMzHJZm0EN9dXNV4fh8tBUILCMmNV+mx68O3a4xfmdqe8lR+KbS8EGijmlqNTdrCxvYE85X0+ogJR5jvqeRTVp8tzVz8xLMCWLl79sNqsvs7G87pBQKAKSU/ZQn2GLkj5jrzuvWplc+ufcxA4gAoANvv9m+8ycBbGphfxFHU/OcsTIFUiPt/sPj53bf7ak+FU/tPMd4cPCDxpTIei9OdIEokPYViW9Nny0Z9+Gf7gfwGeLXhkR4FXtwAAAABJRU5ErkJggg=="
    },
    {
      title: "deploy DEV",
      url:
        "https://gitlab.com/imagia/DevOps/argocd-apps/hq/-/blob/master/hq-prod/evidens-dev/evidens/values.yaml",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACtElEQVQ4jU2TT2hcZRTFf/f7vvdeJxObgt2UgknTmSb+C6gLwRadUWkqumjAQbqouNCNWJduna4E/0C2gouSnZOl0G0GXIgg1U2z0UpMXLZWifkz773vOy6mk7i4cLicc7n3cA/9Pg5g5+X59s7y0y2Afh8nyY4LkzCArcsL57Zffeb8hOc+HXYcQPLZB6rihwCvPOox1gAw7HY8gIv2kaz+ZMILNhzWAr9jtgJWCpwNhxEDSYBhJsBqAIkrIAfQHQ5rB7DdbS2a2Tzoya1OewmQ+jdtvIEYY/i9u7Bg0A5mF7Zebz0HEADM+6tNby7J2I/pNeAX7g4CN6nB2Lz7VBBUfzp7Z8q7zIA6hivAzwEgHrJcFkoIYu17wFe2vlmyPnFgswTYqulWUsJAJW8JPrfR13OL5Z38R9uzhpwEaPeBfVftcej82MUUUTElP32aFYGzZJYaKk88W10M7rH82vQlO6mfUoXILRO+zN7eP3T4IAASxvRMIj9dkaJhqLIXrJmKsOwo9SYN6jiLYkVKlYlmHO2lWO1Wqndr1f+mWMZGPEzRlEakNItUEDnkfYcjAwt2Bmdnqakgm1KW5ViSghIhK3B5UzkjsLPUnMGZmU8IF6qHl9JB/Y0PLnCOXDOMvLDipEAmJOXTwglLpyhtnsxnLqQy3QqhfPHo1cq19ns+Z9VVNqM7Gh38Zf7+tvNm6PHZFE+cUnLPuyJl+kdV/Dhcv7cG4CRMg57P3/31Vv336CVlfG9LrsibyAVq86hoYG7JFQrph/p+uhiu31vToOfV7zvGQZFpoxMA1MPH9fYXWm3r4cqiHlxdlFbbqr5tfbnRGT+eNjphEjKOAKBBzx/h263L+zcu/LZ/Y+EP3T7/xuRUDXr+USZMkh1vII2FkmmABzhYnX/i4LO5ubGQ4+H/i/p/D6l15+tCNJQAAAAASUVORK5CYII="
    },
    {
      title: "Evidens (DEV)",
      url: "https://evidens.dev.hq.imagiaops.com",
      icon: evidensIcon
    },
    {
      title: "Evidens (QA)",
      url: "https://evidens.qa.hq.imagiaops.com",
      icon: evidensIcon
    },
    {
      title: "Evidens (PRE-PROD)",
      url: "https://evidens.prod.hq.imagiaops.com",
      icon: evidensIcon
    },
    {
      title: "Onboarding DOC",
      url:
        "https://imagia.atlassian.net/wiki/spaces/RD/pages/4274388993/Onboarding"
    }
  ]
};
