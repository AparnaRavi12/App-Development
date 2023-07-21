import React from "react";
import { Link } from "react-router-dom";
import './Books.css';
function Books(){
    return(
        <div className="book">
          <Link to="/home">HOME</Link>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Book-Store</title>
        <link rel="stylesheet" href="main.css" />
        
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet" />
     
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <nav className="nav-bar">
        </nav>
        <main>
          <div className="books">
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/I/718ReYbwlFL.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">After You</h2>
              <h3 className="author">by Jojo Myoes</h3>
              <h3 className="rating">1.987 rating</h3>
              <h3 className="price">Rs:2000</h3>
              <p className="info">
                It continues the story of Louisa Clark after Will's death. She is trying to move on. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/I/91JxVjINNsL.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Big Magic</h2>
              <h3 className="author">by Elizabeth Gilbert</h3>
              <h3 className="rating">1.987 rating</h3>
              <h3 className="price">Rs:1500</h3>
              <p className="info">
                Readers of all ages and walks of life have drawn inspiration from Elizabeth
                Gilbert’s books.
              </p>
              <Link to="/payment"><button type="submit" >Buy Now</button></Link>
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/I/9129dzchsGL.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">A Tale for the Time Being</h2>
              <h3 className="author">by Ruth Ozeki</h3>
              <h3 className="rating">1.987 rating</h3>
              <h3 className="price">Rs:1000</h3>

              <p className="info">
                In Tokyo, sixteen-year-old Nao has decided there’s only one escape from her aching loneliness
              </p>
              <Link to="/payment"><button type="submit" >Buy Now</button></Link>
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/I/81djg0KWthS.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The Great Gatsby</h2>
              <h3 className="author">by F. Scott Fitzgerald</h3>
              <h3 className="rating">1.987 rating</h3>
              <h3 className="price">Rs:1300</h3>
              <p className="info">
                The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King 
              </p>
              <Link to="/payment"><button type="submit" >Buy Now</button></Link>
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://books.google.co.in/books/publisher/content?id=RwNKDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U2BQBOrDSSGVuSW53_0khH3fjK0eg&w=1280" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Don Quixote</h2>
              <h3 className="author">by Miguel de Cervantes Saavedra, Tobias George Smollett</h3>
              <h3 className="rating">1.957 rating</h3>
              <h3 className="price">Rs:2200</h3>
              <p className="info">
                "The final and greatest utterance of the human mind." -- Fyodor Dostoyevsky.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Pride and Prejudice</h2>
              <h3 className="author">by Jane Austen </h3>
              <h3 className="rating">1.767 rating</h3>
              <h3 className="price">Rs:500</h3>
              <p className="info">
              Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://cdn.kobo.com/book-images/1ce9bc42-f5ee-4074-a5de-2a23aaffd608/1200/1200/False/treasure-island-annotated-1.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Treasure Island</h2>
              <h3 className="author">by Robert Louis Stevenson</h3>
              <h3 className="rating">2.087 rating</h3>
              <h3 className="price">Rs:2100</h3>
              <p className="info">
              It is considered a coming-of-age story and is noted for its atmosphere, characters, and action. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://leavesandpages.files.wordpress.com/2015/11/jane-eyre-charlotte-bronte.jpg?w=640" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Jane eyre</h2>
              <h3 className="author">by Charlotte Brontë</h3>
              <h3 className="rating">987 rating</h3>
              <h3 className="price">Rs:700</h3>
              <p className="info">
              The Salutation pub in Hulme, Manchester, where Brontë began to write Jane Eyre.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BMDkyNTJlZWUtMzg3My00N2VmLWFiMWQtZDEwMWMyOTc1N2RjXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_FMjpg_UX1000_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">gulliver's travels</h2>
              <h3 className="author">by Jonathan Swift</h3>
              <h3 className="rating">1.000 rating</h3>
              <h3 className="price">Rs:1200</h3>
              <p className="info">
              The strange circumstances in which Gulliver's Travels was first published in 1726.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BN2NhMWM0OGMtOWIwMS00OGM1LWJlN2YtMzc4N2UyOTg5MDlkXkEyXkFqcGdeQXVyNjkwMzAwMjQ@._V1_FMjpg_UX1000_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">david copperfield</h2>
              <h3 className="author">by Charles Dickens</h3>
              <h3 className="rating">870 rating</h3>
              <h3 className="price">Rs:3000</h3>
              <p className="info">
              It was published as a serial in 1849 and 1850 and then as a book in 1850.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://mpd-biblio-covers.imgix.net/9781429959865.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">a tale of two cities</h2>
              <h3 className="author">by Charles Dickens</h3>
              <h3 className="rating">3.987 rating</h3>
              <h3 className="price">Rs:2080</h3>
              <p className="info">
              A Tale of Two Cities, novel by Charles Dickens, published both serially and in book form in 1859.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Little Women</h2>
              <h3 className="author">by Louisa May Alcott</h3>
              <h3 className="rating">786 rating</h3>
              <h3 className="price">Rs:2000</h3>
              <p className="info">
              Little Women is a coming-of-age novel written by American novelist Louisa May Alcott.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/I/51pqUWvj6NL.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">great expectations</h2>
              <h3 className="author">by Charles Dickens</h3>
              <h3 className="rating">700 rating</h3>
              <h3 className="price">Rs:800</h3>
              <p className="info">
              A novel by Charles Dickens.which first appeared in all the Year round.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="data:image/jpeg;base64,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" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">oliver twist</h2>
              <h3 className="author">by Charles Dickens</h3>
              <h3 className="rating">560 rating</h3>
              <h3 className="price">Rs:300</h3>
              <p className="info">
              It was originally published as a serial from 1837 to 1839.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/I/51HMvWsUSPL._AC_UF1000,1000_QL80_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">ncle tom's cabin</h2>
              <h3 className="author">by Harriet Beecher</h3>
              <h3 className="rating">3.898 rating</h3>
              <h3 className="price">Rs:3200</h3>
              <p className="info">
              Harriet Beecher Stowe 1811-1896 published more than 30 books. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/I/81EcXiV-9WL._AC_UF1000,1000_QL80_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Crime and Punishment</h2>
              <h3 className="author">by Fyodor Dostoevsky</h3>
              <h3 className="rating">1.87 rating</h3>
              <h3 className="price">Rs:1700</h3>
              <p className="info">
              Crime and Punishment, Russian Prestupleniye i nakazaniye, novel by Russian writer Fyodor Dostoyevsky. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://images.moviesanywhere.com/45bc0ec075bfc0b4d8f184a7cc5bf993/876ed805-83b1-4387-b0d0-62d08c36536d.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The return of the king</h2>
              <h3 className="author">by JRR Tolkien</h3>
              <h3 className="rating">2.987 rating</h3>
              <h3 className="price">Rs:2000</h3>
              <p className="info">
              Tolkien was the Rawlinson and Bosworth Professor of Anglo-Saxon and a Fellow of Pembroke College.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BZDU3NWYwYjEtNmNmNy00NDJlLWI0MWItMjkzZDJmMTViZmJkXkEyXkFqcGdeQXVyMjM0ODM1NTE@._V1_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Dracula</h2>
              <h3 className="author">by Bram Stoker</h3>
              <h3 className="rating">600 rating</h3>
              <h3 className="price">Rs:860</h3>
              <p className="info">
              Abraham Stoker was an Irish author who wrote the 1897 Gothic horror novel Dracula. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BMTM3OTc2OTM2OF5BMl5BanBnXkFtZTcwMDM1MjU1NQ@@._V1_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The three musketeers</h2>
              <h3 className="author">by Alexandre Dumas</h3>
              <h3 className="rating">456 rating</h3>
              <h3 className="price">Rs:300</h3>
              <p className="info">
              Alexandre Dumas, also known as Alexandre Dumas père, was a French novelist and playwright. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://cdn.kobo.com/book-images/b7770a94-da20-4e60-8bbd-e99412bc3648/1200/1200/False/brave-new-world-a-graphic-novel.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Brave New World</h2>
              <h3 className="author">by Aldous Huxley</h3>
              <h3 className="rating">654 rating</h3>
              <h3 className="price">Rs:2070</h3>
              <p className="info">
              Brave New World is a novel with a science-fiction theme written by bestselling author Aldous Huxley.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/I/51s4UBf-y8L._AC_UF1000,1000_QL80_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">war and peace</h2>
              <h3 className="author">by Leo Tolstoy</h3>
              <h3 className="rating">1708 rating</h3>
              <h3 className="price">Rs:200</h3>
              <p className="info">
              Leo Tolstoy 1828-1910 wrote two of the great novels of the nineteenth century.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">To kill a mockingbird</h2>
              <h3 className="author">by Harper Lee</h3>
              <h3 className="rating">564 rating</h3>
              <h3 className="price">Rs:940</h3>
              <p className="info">
              Harper Lee the famously reclusive author of To Kill a Mockingbird, spent most of her life out of the spotlight.. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://www.sindentheatre.com/sites/default/files/JPEG.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The wizard of oz</h2>
              <h3 className="author">by L. Frank Baum</h3>
              <h3 className="rating">543 rating</h3>
              <h3 className="price">Rs:1290</h3>
              <p className="info">
              A modern fairy tale with a distinctly American setting, a delightfully levelheaded.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BZTZkYTBkY2MtMzRmNS00NjM3LWFiMzItZmJjNzNhMjgyYzczXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Les Misérables</h2>
              <h3 className="author">by Victor-Marie</h3>
              <h3 className="rating">645 rating</h3>
              <h3 className="price">Rs:1300</h3>
              <p className="info">
                   It was an instant popular success and was quickly translated into several languages.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/I/81oCPRx3PpL._AC_UF1000,1000_QL80_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The secret garden</h2>
              <h3 className="author">by Frances Hodgson</h3>
              <h3 className="rating">543 rating</h3>
              <h3 className="price">Rs:500</h3>
              <p className="info">
              The Secret Garden, novel for children written by American author Frances Hodgson Burnett.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://www.maplepress.co.in/cdn/shop/products/9789380005218_700x700.jpg?v=1624805580" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Animal Farm</h2>
              <h3 className="author">by George Orwell</h3>
              <h3 className="rating">100 rating</h3>
              <h3 className="price">Rs:400</h3>
              <p className="info">
              The author of Animal Farm is George Orwell.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The great gatsby</h2>
              <h3 className="author">by Scott Fitzgerald</h3>
              <h3 className="rating">857 rating</h3>
              <h3 className="price">Rs:700</h3>
              <p className="info">
              Francis Scott Key Fitzgerald was an American novelist, essayist, and short story writer. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://cdn.kobo.com/book-images/869050f5-1da7-4aa3-bc21-5c56388a5ea9/1200/1200/False/the-little-prince-52.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Little Prince</h2>
              <h3 className="author">by Antoine de Saint-Exupéry</h3>
              <h3 className="rating">576 rating</h3>
              <h3 className="price">Rs:650</h3>
              <p className="info">
              His fable Le Petit Prince The Little Prince has become a modern classic. His fable Le Petit Prince. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BODFlODBmYjgtNmZkMi00NWY1LWJlMjMtZGFkNGY1ZDE3NTdhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The call of the wild</h2>
              <h3 className="author">by Jack London</h3>
              <h3 className="rating">1.987 rating</h3>
              <h3 className="price">Rs:2000</h3>
              <p className="info">
                IThe Call of the Wild is a short adventure novel by Jack London.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BMTU0NDgxNDg0NV5BMl5BanBnXkFtZTcwMjE4MzkwOA@@._V1_FMjpg_UX1000_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Anna Karenina</h2>
              <h3 className="author">by Leo Tolstoy</h3>
              <h3 className="rating">127 rating</h3>
              <h3 className="price">Rs:200</h3>
              <p className="info">
              Leo Tolstoy 1828-1910 wrote two of the great novels of the nineteenth century.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/The_Wind_in_the_Willows_cover.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The wind in the willows</h2>
              <h3 className="author">by Kenneth Grahame</h3>
              <h3 className="rating">564 rating</h3>
              <h3 className="price">Rs:780</h3>
              <p className="info">
              Kenneth Grahame was a British writer born in Edinburgh, Scotland.s well as The Reluctant Dragon.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://www.theindianbookstore.in/cdn/shop/products/71u-W1xqCRL.jpg?v=1674678645" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The picture of dorian gray</h2>
              <h3 className="author">by Oscar Wilde</h3>
              <h3 className="rating">675 rating</h3>
              <h3 className="price">Rs:340</h3>
              <p className="info">
                Ioscar Fingal O'Fflahertie Wills Wilde was an Irish poet and playwright.The soul is a Terrible reality. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/The_Grapes_of_Wrath_%281939_1st_ed_cover%29.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The grapes of wrath</h2>
              <h3 className="author">by John Steinbeck</h3>
              <h3 className="rating">648 rating</h3>
              <h3 className="price">Rs:2000</h3>
              <p className="info">
              The Grapes of Wrath, the best-known novel by John Steinbeck, published in 1939.  
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BODVjM2M3OTAtNWM1Ny00OWY3LTk3NDQtNThhYzM5NTRhOWJjXkEyXkFqcGdeQXVyODkwMTI0MTE@._V1_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Sense and Sensibility</h2>
              <h3 className="author">by Jane Austen</h3>
              <h3 className="rating">234 rating</h3>
              <h3 className="price">Rs:450</h3>
              <p className="info">
                ISense and Sensibility, novel by Jane Austen was published . 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://flxt.tmsimg.com/assets/p14197_p_v12_an.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The Last of the Mohicans</h2>
              <h3 className="author">by James Fenimore</h3>
              <h3 className="rating">187 rating</h3>
              <h3 className="price">Rs:200</h3>
              <p className="info">
              James Fenimore Cooper was an American writer of the first half of the 19th century.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Harry Potter and the Sorcerer's Stone</h2>
              <h3 className="author">by J. K. Rowling</h3>
              <h3 className="rating">1.887 rating</h3>
              <h3 className="price">Rs:2000</h3>
              <p className="info">
              Harry Potter and the Philosopher's Stone was J.K. Rowling's first novel six titles in the Harry Potte.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BZjk5MDBjMWItODQ4NC00YTgyLWJjYzEtMDZjZWNjODU1NTRjXkEyXkFqcGdeQXVyNjY1NDcwNTI@._V1_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">	Heidi</h2>
              <h3 className="author">by Johanna Spyri</h3>
              <h3 className="rating">253 rating</h3>
              <h3 className="price">Rs:670</h3>
              <p className="info">
              Johanna Louise Spyri was a Swiss author of novels, notably children's stories. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://cdn.kobo.com/book-images/17f4f2f5-2ae8-4d6d-9e30-7efde7bc4d25/1200/1200/False/ulysses-by-james-joyce-5.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">	Ulysses</h2>
              <h3 className="author">by James Joyce</h3>
              <h3 className="rating">877 rating</h3>
              <h3 className="price">Rs:700</h3>
              <p className="info">
              Ulysses, a novel by the Irish writer James Joyce, is a key text of literary modernism.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://cdn.kobo.com/book-images/f597f72b-a948-4071-8f60-df2bf0b67afe/353/569/90/False/the-complete-sherlock-holmes-illustrated-6.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The complete sherlock holmes</h2>
              <h3 className="author">by Arthur Conan Doyle</h3>
              <h3 className="rating">1.65 rating</h3>
              <h3 className="price">Rs:250</h3>
              <p className="info">
              Sir Arthur Ignatius Conan Doyle KStJ, DL was a British writer.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/I/61j4bBLKA4L._AC_UF1000,1000_QL80_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The count of monte cristo</h2>
              <h3 className="author">by Alexandre Duma</h3>
              <h3 className="rating">1.76rating</h3>
              <h3 className="price">Rs:8700</h3>
              <p className="info">
                IDumas was a prolific writer of nonfiction. He wrote journal articles on politics and culture 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BZmYxNjE2M2UtYzJhOC00MzVlLWJhM2ItYzkzZWJkZWFhNTE1L2ltYWdlXkEyXkFqcGdeQXVyMzMyODMwMTI@._V1_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The Hunchback of Notre Dame</h2>
              <h3 className="author">by Victor Hugo</h3>
              <h3 className="rating">6.87 rating</h3>
              <h3 className="price">Rs:400</h3>
              <p className="info">
              Hunchback features a lot of violence, with horrible evil and cruelty behind it. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/I/71Au8SjrwkL._AC_UF1000,1000_QL80_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The Old Man and the Sea</h2>
              <h3 className="author">by Ernest Hemingway</h3>
              <h3 className="rating">1.57 rating</h3>
              <h3 className="price">Rs:800</h3>
              <p className="info">
              The Old Man and the Sea, short heroic novel by Ernest Hemingway, published in 1952. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://mpd-biblio-covers.imgix.net/9781466804920.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">	Ivanhoe</h2>
              <h3 className="author">by Walter Scott </h3>
              <h3 className="rating">1097 rating</h3>
              <h3 className="price">Rs:500</h3>
              <p className="info">
              A Romance by Walter Scott is a historical novel published in three volumes.
              A Romance by Walter Scott is a historical novel 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BODUwYmY3ODUtOTE3Zi00OTEyLTkwOWEtZWE0MTAzYmNkNzI0XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Black Beauty</h2>
              <h3 className="author">by 	Anna Sewell</h3>
              <h3 className="rating">987 rating</h3>
              <h3 className="price">Rs:675</h3>
              <p className="info">
                IBlack Beauty: His Grooms and Companions, the Autobiography of a Horse is an 1877.Black Beauty.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://lumiere-a.akamaihd.net/v1/images/p_peterpan_19755_96e77c5b.jpeg?region=0%2C0%2C540%2C810" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">	Peter Pan</h2>
              <h3 className="author">by J.M. Barrie</h3>
              <h3 className="rating">987 rating</h3>
              <h3 className="price">Rs:970</h3>
              <p className="info">
              Peter Pan is a fictional character created by Scottish novelist and playwright .  
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Poster_-_A_Farewell_to_Arms_%281932%29_01.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">A Farewell to Arms</h2>
              <h3 className="author">by Ernest Hemingway</h3>
              <h3 className="rating">876 rating</h3>
              <h3 className="price">Rs:6450</h3>
              <p className="info">
              A Farewell to Arms, third novel by Ernest Hemingway, published in 1929. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://cdn.kobo.com/book-images/8033c4a3-46df-4d96-8110-dc8be4dbedfd/353/569/90/False/lord-of-the-flies-2.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Lord of the Flies</h2>
              <h3 className="author">by William Golding</h3>
              <h3 className="rating">234 rating</h3>
              <h3 className="price">Rs:970</h3>
              <p className="info">
              Lord of the Flies is a 1954 novel by the Nobel Prize-winning British author William. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/I/91dLvgmOjML._AC_UF1000,1000_QL80_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Lord Jim</h2>
              <h3 className="author">by Joseph Conrad</h3>
              <h3 className="rating">987 rating</h3>
              <h3 className="price">Rs:890</h3>
              <p className="info">
              Lord Jim is a novel by Joseph Conrad originally published as a serial in Blackwood's Magazine. Magazine..
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/M/MV5BYzhmNWMyYjQtNTVlMC00MGUwLWFmYjEtM2NkNWY0ODQ2YmFiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The Stranger</h2>
              <h3 className="author">by Albert Camus</h3>
              <h3 className="rating">7987 rating</h3>
              <h3 className="price">Rs:765</h3>
              <p className="info">
              The Stranger is a 2022 Australian psychological crime thriller film written and directed by Thomas.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://m.media-amazon.com/images/I/51viLH0i8SL.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">The Trial</h2>
              <h3 className="author">by Franz Kafka</h3>
              <h3 className="rating">965 rating</h3>
              <h3 className="price">Rs:900</h3>
              <p className="info">
              The Trial is a novel written by Franz Kafka in 1914 and 1915 and published.
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
          <div className="books">
            <div>
              <img src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781847497963.jpg" alt="" className="book-img" />
            </div>
            <div className="descp">
              <h2 className="book-name">Vanity Fair</h2>
              <h3 className="author">by William Makepeace Thackeray</h3>
              <h3 className="rating">887 rating</h3>
              <h3 className="price">Rs:270</h3>
              <p className="info">
              Vanity Fair is an English novel by William Makepeace Thackeray, which follows the lives of Becky Sharp. 
              </p>
            <Link to="/payment"> <button type="submit">Buy Now</button></Link> 
            </div>
          </div>
        </main>
        <Link to="/home">HOME</Link>
      </div>
    );
}
export default Books;