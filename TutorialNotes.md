Chapter #08
-We stylized the icons below the search bar

Chapter #09
-We install React Router
npm install react-router-dom
npm install use-react-router
https://reactrouter.com/web/api/BrowserRouter
-Wrapped <App> in BrowserRouter component.
-Set up routing in App.js

Chapter #10
-Working on the Nav Bar
-Added red background to NavBar route localhost/search

Chapter #11
-Added props to the SearchBar.js file and made all the icons/search bars smaller.

Chapter #12
-creating sub navigation bar under search
bar component in the /search route.
-creating SubNavBar items
-added icons to SubNavBar

Chapter #13
-thinking of skipping this sub nav bar section

Chapter #14
-thinking of skipping this sub nav bar section

Chapter #15 (32 chapters in total)
-create search results summary component
-created grey bar under search menu that diplays your search results.

Chapter #16
Added Filter Icons and $ symbols on the Icons in the Search Results gray section below the search bar.

Chapter #17
-Created SearchResult/(s) components and put placeholder images in place
on the /search route.

Chapter #18
-Added search image descriptions

Chapter #19
npm install --save react-rating
-stylized stars for Yelp reviews

Chapter #20
-finished styling static Yelp results.

Chapter #21
-Going to start making the application dynamic and going to start using React Hooks
-Implementing State in SearchBar.js
-implemented onSubmit and forms and hooks into SearchBar.js

Chapter #22
-implemented a search function that enables query params and redirection from the landing page to the /search route.
-If you click on the Yelp Logo in the Search route you are re-directed back to the Landing Page.

Chapter #23
-worked on getting the /search route search bars autofilled with the search params from
the landing page.

Chapter #24
-Get set up with the Yelp Fusion API.
-Open Postman on the Mac
https://app.getpostman.com/run-collection/6b506a43109229cb2798

Client ID
PRf0WHLd3FwdtZ3TJnOjjA

API Key
eNaf0vZMUNd-TRwWzw1G4sokf22oJfhdyVrV7EJ_a9jTGXFXZ6BEd-sSw7E0EI00pF5hd3Qa0wnU6vTnJWA2EF5VcV2zhGnEotJtGB7hA_Q8MRk-BlePjxhwL0FpYHYx

-In CH. 24 we added 0 code to our project, and he just showed how to use Postman with the Yelp Fusion API.

Chapter #25
Created a "hooks" folder and a "yelp-api" folder inside the Hooks folder. Then created a config-api.js file inside the yelp-api folder.
-Created a api.js inside yelp-api folder.

npm install query-string

-built out fetch request with authorization headers in api.js

Chapter #26
export function useBusinessSearch(term, location) {
const [businesses, setBusinesses] = useState([]);
const [amountResults, setAmountResults] = useState([]);
const [searchParams, setSearchParams] = useState({ term, location });

    useEffect(() => {
    	setBusinesses([]);
    	const fetchData = async () => {
    		try {
    			const rawData = await api.get('/businesses/search', searchParams);
    			const resp = await rawData.json();
    			setBusinesses(resp.businesses);
    			setAmountResults(resp.total);
    		} catch (e) {
    			console.error(e);
    		}
    	};
    	fetchData();
    }, [searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];

}

Chapter #27
-Need to use the CORS-anwhere GitHub repo for in order to use the Yelp Fusion api:
https://github.com/Rob--W/cors-anywhere
-this repo acts as a proxy,

#URL that grants temporary access
https://cors-anywhere.herokuapp.com/corsdemo

-built out the Search.js component.

Chapter #28
Updating SearchResult.js to return Yelp Search Images Dynamically.
-passed all Yelp API result props dynamically into SearchResult.js and BusinessRating.js

Chapter #29
Updating the SearchResult.js file to include Yelp Api tags.
Did this:
const tags = biz.categories.map(category => (
<span className={`tag ${styles['business-tag']}`} key={biz.id + category.title}>
{category.title}
</span>
));
Inside SearchResult.js

Added this styling to SearchResult.module.css:
:global(.tag).business-tag {
margin-right: 4px;
}

Made SearchResult.js have Yelp API content passed into the UI dynamically:
export function SearchResult(props) {
const biz = props.business;

    if (!props.business) {
    	return <div></div>;
    }

    const tags = biz.categories.map(category => (
    	<span className={`tag ${styles['business-tag']}`} key={biz.id + category.title}>
    		{category.title}
    	</span>
    ));
    const adressLines = biz.location.display_address.map(adressLine => <p key={biz.id + adressLine}>{adressLine}</p>);

    return (
    	<div>
    		SearchResult
    		<div className={styles['search-result']}>
    			<img src={biz.image_url} alt="business" className={styles['business-image']} />
    			<div className={styles['business-info']}>
    				<h2 className="subtitle">{biz.name}</h2>
    				<BusinessRating reviewCount={biz.review_count} rating={biz.rating} />
    				<p>
    					{biz.price} {tags}
    				</p>
    			</div>
    			<div className={styles['contact-info']}>
    				<p>{biz.phone}</p>
    				{adressLines}
    			</div>
    		</div>
    	</div>
    );

}

Chapter #30
-enabled search reults text to become dynamic SearchResultsSummary.js

Added this to Search.js
function search(term, location) {
console.log('I am called');
performSearch({ term, location });
}

-added ability to dynamically search for things on the /search page and landing page.

Chapter #30
Updated Sarch.js to enable query params to get updated in real time on new querys.
-creating a spinner component with spinner.js and corresponding css module
-added spinner icon rendering in SpearchResults.js and added spinner styling to relevant CSS file.
