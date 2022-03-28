
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea, Typography } from '@mui/material';
//import Paper from '@mui/material/Paper';

import { Grid } from '@material-ui/core';


export const CardBoxCobertura = () => {


  return (

    <Box
      gap={1}
      marginX={1}
      padding={3}

    >
      <br></br>

      <Typography marginX={1} variant="h5" component="h5">
        Escolha sua cobertura doce
      </Typography>
      <br></br>

      <Grid lg={12} item container spacing={2}>

        <Grid item lg={2} sm={4} xs={12}>
          <Card sx={{ maxWidth: 500 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://i.pinimg.com/736x/62/b1/b0/62b1b0b1dd6d8da30e92e0c68b426600.jpg"
                alt="Granulado"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card sx={{ maxWidth: 500 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://http2.mlstatic.com/D_NQ_NP_806169-MLB42650852880_072020-O.jpg"
                alt="Granulado Colorido"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://i0.wp.com/agroemdia.com.br/wp-content/uploads/2019/02/leite-em-p%C3%B3-6-2-19-1.jpg?resize=800%2C445&ssl=1"
                alt="Leite em Pó"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/c/chocolate-po-saudavel-1216-1400x800.jpg"
                alt="Ovomaltine em Pó"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://static1.casapraticaqualita.com.br/articles/5/17/85/@/2004-ovo-de-chocolate-recheado-com-pacoca-fun-opengraph_1200-2.jpg"
                alt="Paçoca em Pó"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5s5d-uySpW76pPJ8SIOZwlhCHjb0D9eozQHjxfR4wtn_n2EP7ULnvcU2txg9TPavXRY&usqp=CAU"
                alt="Amendoim"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIREhgVEhUYGBgYGBoYGBgYGBgYGBgYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzQrISw0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIFBgcDBAj/xAA4EAACAQIFAwIEBQMEAgMBAAABAgADEQQFEiExBkFRYXETIoGRMkKhscEHFPAjYtHhFYIzkqIk/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAiEQADAQEAAwACAwEBAAAAAAAAAQIRIQMSMRNhIkFRgTL/2gAMAwEAAhEDEQA/ANciwiySAhCLACLCEAI6EJACEIQAhCEAIQhACEWEkCQhCAEIRYAkIQgBCEJACEISQEbHQgDYkWEAbAxYGANtCLCQBIsISQEWJFgCwhCQB0IQgBCEIAQnAYgE7ER61Be0orlvC/qzrCNqVAsYKkO0nhCls6M1ogaeHG19JBHicaGKLETJ+bKwuvHzSWhFiToMhIQhACEIQAhCEAIQhACEISQEbHRsAIkWJACEIQBIojYsAIsBCQBYRIQBYQiEwCudR9VphHWii66jC9i2lVHa58+ki6HXLq2nE0dAYbMpO1+DY8j2MrHWzU6WOqNU3ZmUqbBtCaV3CnYubG1+Leu0T/5NXSyVGcDlHXf3G5H63mDpnVMThplHFh91YEHcEcEeZ66eKIIlY6Hpo9M3J0qxsL9iAdJ9jf7iXP4dHsLEe/8AM5lNb1k00h2cVCoUj1kZRxxvI7q7PhhEUW1O4JUX2ABsWP1/mV45jVQh/wC5pPsGZQAdjzpHeWuaptoQl64zRVRalix43tOgoICCu1pmD9W1Ha/9wlIXsF0ljt3YBTYe8msp6nDEpUdDwRUU2VgTa5HYiT/5WtByzQPiW27w+IO+0r+IzRNRKsGU7qykEEW7ETg+arpO/aW/P0z/ABcPBjetKj1XTDLTCp+eowGq3NgSNuZN5D1CmJY02AWoouVBBUjypBPniYBm+KqU6zqQRpdht2Fza3paXH+nuK+HXWpXJRVB5BJNwRuBxzNU6T1lnMucSNshPPhMXTrIHpuGU9wf8tO2sTX2Rz4x0IQkkBCEIAQhCAEbCEAIkISQEIQkAZC8SKIA6EbFgCxYl4AyPZE4xYyo1o87TwJiRe5Mpd+paZ0yj+p+Gb+4Djh0A/8AZNrfa33mdHEvSa/f3m+dUYCnXpMGUHvv57e0zLqTJMJrpph0ZXdUd2eoxVNWwRQT9yb7W83GMUm2mb9xYe/+nmIqU6dRzcK5XT/u031EfoJcGznbxKhXpvhqA/8A6UqEfLovcrYbAAjZdu3E8VPM2fS2o6LgXG5/3Fe+3H3mdy6rnwvK/wBPR/UKpUqChVp3YKjq4UH5fnYgHzcN29ZR8HmZBbfkW+l5fEzbApUAD1mXu6hQT9Cbke8qOdYKnUq6qVhquW7Df8x8es2nEsZDTXUeFseCdjPfl+YtTIcAEagLNupNuCJO5Tk2FUlLI506jUcXB7m2xsPYfWevMciwj01NMoDc6WpsdIe35kPY25HENySlRHr1KaIYWB1LdRfYPqG/tYsfoJonSfTIqUhVxuos+4ph2UIp41aTfV6X2lXyb+njV8I7PWQNVRChVWYUwramvcrcmwU+Ld5eFzT4Y0H8u32mdekdK7VcRwz/AKCwtVS+HHwqoHyElmQkdmDXsPUcc7zL06gxeEdkDlCjMrIVUkODYhiRc7ia8mZahe/0mG9QlsRi6rjUqvVZhqBBClvluDxtbaWm1RVbPC7dEZ64qMt/ldSzBdhcG4Nhx4+s0fDZiTbeZf0plZSm70V1G1izONTEWYhV+3HiWvIMYtRtLfKy8qfTxMfI6Vavhp6prpfMJU1gz0GR1HEoq249p68PWDg27Tq8V8SOWp7p2jYRJsUFvCJCALEhEgCxIQgBCEIAyLCEAWEIjNaQSR393vePOLv/ANSLx11Ym+xM9mARbAv3/ScT9tw6OZpK4arrS59pC4pCj7bgnbz7SXDLbYieKvYMG8S3kacpMiFjeHE5cXWzta44AufvM+6v6PqUr1abh1JAKtZGXYAWJ2YbehHrNEOKtxKJ/UHNHYrTv8oXV9WJH8fvKT67z6XndKRTyZ2vrrhSewUv9zcfpI3MfiYVFRXJIZiWAsNydJXwLfrJzAdUVMOAo0kA3IsLHsQb87fvGZhjVxasQiqTtYWtYnt/nabfCzWlTwrF2uD7+J71wz1mqFNRFOmz7X5A4+oDfaMyHLalet8FASdekf8A65PYWUn6Tacg6Cw1JP8AU1O1t7Eon0tufcmWp4+GW8MXGIqGmCL2GxPmdKWYVKY1Ne3YGXXrno4YCk1fDMxpAgOjC7IGIFww5W5HPHmUvJsqxmPcf29BnVWGpttA42LMQt/S95Cyi3vhoGX9SnA5fSQjVVqanVOAAzFrt3AAI28n6zzri8TXBqBSR3su23I4kNmOQ4ujWLYum6qRpRwQ6ED/AHAm35jY2O8icRm9ekdAchVNwL2G/t5mThVxrWXnEtNP6axocjULEdv5E8f9TcDTNFMSFGpGCN/uV9hfyQbWPqZE9Ao+JxBKNsiEvfj5tlBPuP0lh6lwGIxRXBhNIb52dvw6QeRbnf8AiUlejz+itPXplFLG1Ue6Oyk7AgkbeLiSuRZ4wrIv5g173/KL6rn2vNBof0xw/wALT8WoXt+MaAP/AKW4+v1lHzDojEYep8JEeqxLMXRWIKC1hYX03PI/295q0qlhV0udHqZDb5h9xLp07XWpTLBg1+wINveZAmKfLwnxMMVfck1qbAG17KhJ37cAWIjG6lqinVeifhsykHQeb3vz72vztzeRE+rTJqfZcNezTqjCYa4d9TD8q/MfXfiGU9UYbEvpQsrHhXXTf2N5hWUdQvSVmADlrAqwuD4Pm95NdN5jWxGLpuWu5dBt2F+AO1vE2dNdM/xzhu0IkWbHOESEIAQhGwBYQhAG3i3iQgDpzqC8fFkEkFmODZwRacg7KBcEG37SeqcSIx4axtMPJPOGs0c0rmc8TiCOb2nuy+kEUF7ajuT49BPezLbkTmrxul9NVSX9FYev6yudVZNUxNPWg3VbeNQvcW8nn7y3Y/AIzqwsBcah2IiY6oukiw4+3tM5lqt34WbPnrHKUcg8/wCdvMkenMI9esFF9F9zx9pdc4wFNmLMoPi4F54MmrJSqG9tjOj82rM6UaL3lGUYXDVNVJERyouV737n19feT74wAWBtM4xvUoR9S2ItYi9pzbqjV+Vhf1Hf6zOrfSVKL/j1p4qk9BjtUVkPFwGBBIv3tJLK8LRw1NaVJQiINKqP83Pk95nOXZyVqKzmw9+JasPnSOLqwPsZHj8jzoqSy4qnTqIUdQysLMrbgj1ExfO+hqgxFRKZJQG6DctpIuB6kbj6TTkzEeZ3w+KUqbgb73mvvvx4VSwqHR6Jg6YpoLHlidmZu5b19O0suOzukihnZQRtz55/YSk9T47Ri2WmOQt7caj/ANWlNo5z/q/EqAOAfwPci3HYjeUlVWpl+Gu4bqmk+ytf03H6GTmFxgbfzMLxGcNX4VUG1gg02t69z6y69PZy/wDb03c3DAgnuCrFfm+14pVD/QcpmiYxaVemUqIHRhYqwBB+n8zI8/6TNCpVSklRqbAFCAzaVNzpLW3I437Wl9w+aBhzJ3A1l03MvPl14U9XJgOCyCoDpA287fqDNN6H6ap4ZhVaxf8AKOwJ737m0tGZ5XRxG9gr32Ycn0byJ6sHl/wxa83nK6Uqmlh70MdGgWizUxFvEvCJAC8SEJIFhEhAGRwMSLAFiiJFPB9pDJE1A8bzjVRT+ISNTFFTOxxdxvOSvLpuow89XEWJEaMTPFicQtyDzyCP2kpgMANN3F2Pbfb/ALnOnVPho8RF4rHBSNXF95EYzMQqkltgL39JZ8fklKpvZlPYgn9jM563pf24RNXOon106bbfUyPSt6TLlkbmmaO5+VGI7Hj9JXGxDAk3sTPfhuptFg1JH35bVc+5vaQmYYk1aw0gIWcAW4Fz+150z4knwU1mlnw2WYdqYevVsSbadJJF+De9rTwVcJTpVT8F9Si3zbgEnkWP1kM+IcqTuDww8EbHbzzDLcQ5DAC/rxb3+8lQw6Rd2xmDsFCup0glhpcA/wC4bfcfrPJTxJpVFZSdLta3YgmU98QymxIv6G/02kxlFRq1RKfbWpN+NIN2tJqNXQqRquEy6pVTllt4G31lezzOKuEc0SPn/L4Kn81/EumAxA0ygf1OqL8akRyUZT7XGn92mEwiuvenDC062Jb4rsig7XYou9rbk+0qOfZboLPTN1J3Fxa/kW4jKuKdOdhOtHF1Kx+HT/E1ze4AVQPmLE7AW8+Z0ymvhNOSGp1ahOlAbnxv+0vGTvX+EqiuqKq2AIB45uNJJJJvc+ZU6uX1Kf4CDYHdGDDixAI52jcNjGBWx45FyPcG0m1pWXn00HAY9jUAdgewIFgfpLzgcVcCZbk1OpVrrpXkg6RuFAtc/YTTsnww1fONh28zhqfWtX9mjawnMASzDwN5LzzUmUDx7TolQXtOzw0pWM5rWs6QimNnQZBEixJIEhCIYAsIQgCRYkWAE51XtOk517AXMq3iJRGNgi7XGwJ3v/E7vlq2/Ef0nRa9p0fFAiclTNG6dIgBljrU1MQQDe/oPSSn93biccTigpB9d/bvITMq5pnUjXQ/cekxWQuGme30namP8mZ71+KddLhtLoLp4N+VP/PpDNs/dVITk7XkLgMVSeoTimOnST8ouzN2EvO11EqUijtSrBvmU+54+8kMLgKlaooVSz8KFBJvLFmCUVY/BIdCpUawbjUvOx/EDwZe+gcuoiglZV+dlszHm4Yq1vQ2vOhXzpSlnwpo6CxrrqKqCRchmAa/0vK/iMnqYSppqIyMfNiGHoRsRPoYaLbysdUZfTrU/nUHSbjyPYyjpoqumCY9QHIQE777cE9r95M9P0K6Nr0W8m3A8ekcWSm7W2IcngE7E8X7iSK9U1u2gA+Up73FiflUb2M0f8pwtMr6WXLs+cstNFLOxCgXsLnyfHeXFejcJWGvEqarncszOoHgKqkAAff1MzrpTHqMUhIHc/W3M1WjjbgTlSU1jJr9GedfdApTpGthC2lTd6bHVZe7Ix327g329rSg5dgQrXsbE2BPJt/F5uedZgPhupI+ZSu/G4PMw7Eu1NmS4uht7gcH6ixm8tucRE8esun/AI6nh0BxNQICLhVBdjcX3AvIb/wlHF11+G+gl7XIHzLfYn14lcGLbYg+xMmMgx16yb2IYE+w5kUnK1F3SfDZOnsgw+FUCml2tZnbdm9z2HoNpPPg05sAfIkFgscCoN570xvrKLM6ZvdGVnKNpnowOpmB7CMCpUcM29haSNNABsAPSVhP2/Qp8OxjTEVu0Uzul6uHO1gkSLEliBIQiQB0IQgDbwEbeKIA4TniCCpBnQmctIbmUprOlpREO5WeXEY4KJNYjCoRuJSur6bUKbMpupIG/wCW84fI6Xw6ZxkXm/ULO2iluSbC25PsJ4swwuMALj4iqFGzNx7qNgPcSqV8VpcFWII3vxY3239pxrZ5XJN6j2vv8xsfp3l58az9mmpBm2Y1NQUi5W5JXcEW724tIurjL7kz04PMmTEpUFmIY7cggqVIPpYmSD5MlWoX0aQTfQlwB9uPYTZJTK0z7T4Q9PHsTsC3Ye82Ho3MkTCpTLDUigN7nc/uZltXL0pW0n/qe+oKmGswfSTa1vzdzt3HH3isc8KtPcZsNTNFHcSDzzNh8NgCLsCF35J/jvKSuKxBF9Xa/HpIjEZi5qWcnUNiTxbwB2mEzTfS/rh0fKw1Rje99yT3J5IHa5jquTU9O3ykcEd/Sx2nswGYrQfXUQOo5U8EkG3/ADPZj8+TEG4RF9tuOJpj/wBL8zMJfojpUVbvUfSBYXS2tjsbkkGw/wC5fcVkzpTPwWJYDZXI+b01AbSj/wBPMz016lMcFQ/1BA/n9ZpJxlxudpRyn9+mVNp8M1xCYiuzfEUoFuNJ5B4NzKNjcF8ViFbUTYbb3Pp53/eaz1PXRMHXfhiQgtz85VdvWxMzfI8wp0K+s3YKdrWuLj/uaJ+spImUqesiH6aqUiGdWI8WIP6jcSSw2VNTXWi7He/pzzJnNupxW/00UlLizMADcbkjba9vPmS3RIXFU61PnQysL9lcHb21Kx+st2uNkUklpHYLPzTS1Q28HufpJDC9TqxAJZfUg2+8oWbVtWMqDhUdkUdgE2B/n6yVTMMCqWPxSwAswKi7bXsOAPc39Jm/D3C0tYablWZg8mTIx197zJ8izW7BQTY9jz6by3Yas3kzNTU8+ikmW+hirsAPMljIDK6VvmPPb0k2jXnV4k0unPeaOhCJNjMSBhEMAdCJCANgDGxdVoBxxVW1h5nn/uLQx7XG3aRD4gic3kbTNpXCVfFE8mQufqlSk6v+EjeKMQZCZ7jDUHw6e5/MR+0xa9lhpPGZ1m2WOjkA6l/K1uR6+D6SLfA1LG4mgrlDuDfmedenqhb5gbe06I+YyGyl5dgdDFn7AH/gSx5d1Y9AaCiFPGkXN+5I3M9PUOSMlMugPA1C3ja/7SlOSNjHdLJrCTzjMFqXcKF1Emw4HoJypYtqrUxUH/x00VR6adQY++oH7Tx/2zOoFjYn9O89xpuzu3cgED2ULb7KJPr/ABI9v5E3hs9pU00vRDsL/NrK38AixlWzjGB8QXVdCsfwglrD3PMc6tfg39p51w5eoNX4VNz+9oldFVzh7MWG+nInPCIxYAbXPc2/eJiauIxLf6am3ACjdvU+TPVhOm8YP9SpTdUB3J+Xf0/SH6r6yE6Zb+milCoSCNRsL9iB4PvLucyCpdiB9ZnGT0KlVmRVLOgv7jzLhk/TLkh6gtbgeJn6pvSK1fTl1AjYjCMg2LHWPdTcD7C0y/Q9Mm9xNzxWWDT7Sg5/lBRyQLqe1r2mrnmCawpaO7nYbfzxeaL0Bg6mHp1az7CoEVB5CaiW9rtb6Tw9OZajVLsikD02vL3WoXS0mZxiq1YYx1DgCmLqNvYsXH/sSf5kOUI5ml9R5KzfOv4h28iVNMKpbSygdjzt9JZrSEyNy3HmjURr2s67kXsLi5+0uJ6tapUJpIqJfa4LMR672v6StZ1hMPTRfhamfWt3bgAA/KqjgXtzczzYbGPSAIsCGvuAf0O0zqWi8tP6a9kHVBsq4pNGr8LhSqn7/wAS8owIBBuDuCO4nz03UVaoqo7/ACKQVQKoH6D/AC81r+n2aGvhyjG5QgA+h/z9ZM1jSZTySs9kW2ES8JqYCmNMUxCYAoMIghAGRrmLAiAeDEyBzLUASvMtD0LzzvlyNzKVOmk1hRTVqudNz9Nv2k1lmXADcSwJlVMcKJ6kw6rwJExgqjyYbBIPyidalNfAnr0zm6XlsK6QOPoggiwsRaZzm+VinU+VBYnbYczWK2FLTwVcjVzdpDXdLKjO8vyTUdTCLj8gJYsmxFrfzNJpZOqDaOfLFjGT7IxXE4d0NmFj7CeQ4bY2HYzYcb01Tq/iE8R6WpUwbCP+E+yMpqsaKroOkjcEbEEd7xz57XPNRmBsWBJIYjuwPJk/1PkIQnRwdx6entKvRyuqzhQO8zw09i8/09Yvita8aG1+N7AD9pqlISndDZP/AGtI6vxvufQdhLlRM0lYjHyVrCpR1CROLyfXseJOgwvLYUTwgMF0+tP8MlBhBbeeqIZCWEumyLxWWhxILEdJU3JYixlvMYwk4FTRl2d9I6blD9DKZmGXMTsCCORNxx+G1Ayp4/K7NqA3kNF5oy6ll9RiAFJJ8TZ/6fZQ+Eok1Nmex0+AL8+Dv+k8+SUNJuVAPtvLVh5mp2tZNVzD3hot5zUx15uYi6ohMQmNvAOoMJzBhAEvFBnLVFDQDreGqc7wvAOuqGqcrwvAOmqIWnO8LyAOLRLxIXgC3gTGkwvAAieTEpcT1RGW8EoqmZ4EVAQRIjA5OwqXI2HEvrYZDyI5aCDtK4y/sjxYOnpAEkaQtBVAjtUskUbH3hec9UX4kEHS8LzlqhqgHSIYzVE1QBWQGeZ8Ih5E9GqF4wacUwyDtOyqBEvHXhJBtjw0NU56oapIOhaNLRhaNZoB2Vok4q8IA48whCSB8a0SEgDo2EIB0MIQhhCQhCANMQwhACEIQAgIQkAIQhAEMIQkgIQhIAQhCAEWEJICEIQAiGEJAEnJokJYD04hCEA//9k="
                alt=" Chocoball Preto e Branco"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://www.casadoscereais.com.br/media/catalog/product/cache/1/image/800x582.15962441315/9df78eab33525d08d6e5fb8d27136e95/c/o/coco_rallado_grosso_2.jpg"
                alt=" Coco Ralado"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://www.jardimdaservas.com.br/wp-content/uploads/2021/06/jde_confetidisquete.jpg"
                alt=" Confeti"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://images.tcdn.com.br/img/img_prod/641624/gotas_de_chocolate_meio_amargo_100g_947_1_20180913165538.jpg"
                alt="  Gostas Chocolate"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://cf.shopee.com.br/file/c05498773e06c7c319b9f58febf85a1a"
                alt="  Bis"
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={2} sm={4} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://media.istockphoto.com/photos/kit-kat-chocolate-bar-picture-id458287309?k=20&m=458287309&s=612x612&w=0&h=uJ4mRw951M6fKXRB4bso2YMe8ED2AlkMjoyiQhFtN2c="
                alt=" KitKat"
              />

            </CardActionArea>
          </Card>
        </Grid>

      </Grid>

    </Box >

  );
};
