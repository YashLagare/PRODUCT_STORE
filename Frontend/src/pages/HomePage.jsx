import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";
import { useProductStore } from "../store/product";

const HomePage = () => {
  const fetchProducts = useProductStore((state) => state.fetchProducts); // ✅ Get function reference
  const products = useProductStore((state) => state.products); // ✅ Get products

  useEffect(() => {
    fetchProducts(); 
  }, [fetchProducts]); 

  console.log("products", products);

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
          <Text 
           fontSize={"30"}
           fontWeight={"bold"}
           bgGradient={"linear(to-r, cyan.400, blue.500)"}
           bgClip={"text"}
           textAlign={"center"}
          >
              Current Products 🚀
          </Text>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}  
            spacing={6} 
            w="full"
            // border="1px solid red"
          >
              {products.map((product) =>(
                <ProductCard key={product._id} product={product} />
              ))}
          </SimpleGrid>
          
         {products.length === 0 && (
           <Text fontSize="xl" textAlign={"center"} fontWeight="bold" color="gray.500">
           No products found 😢{" "}
           <Link to={"/create"}>
               <Text as="span" color="blue.500" _hover={{ textDecoration: "underline"}}>
                 Create Product
               </Text>
           </Link>
           </Text>
         )}
      </VStack>
    </Container>
  )
}

export default HomePage