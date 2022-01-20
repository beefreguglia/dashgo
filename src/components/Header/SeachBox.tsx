import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

// Temos 2 formas de tratar formularios no React

// Controlled components =>
//   São aqueles que nós criamos um estado com o conteúdo
//   iniciando com o valor vazio passando no input o
//   value={VariavelEstado} e o 
//   onChange={event => setVariavelEstado(event.target.value)}
//   assim recebendo o valor do input.
//   Para Utilizarmos logicas de escrever algo no input e
//   fazer algo devemos utilizar a lógica de bebounce.

// Uncontrolled components => 
//    São formas de acessar o valor do input só no momento que
//    precisarmos dele nao precisando armazena-lo em um estado
//    acessando ele só quando necessario utilizando uma
//    const variavel = useRef<TipoElemento(HTMLInputElement)>(null);
//    usando a propriedade ref={variavel} no componente de modo
//    imperativo

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>();
  
  return(
    <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          px="4"
          mr="4"
          _placeholder={{
            color: 'gray.400'
          }}
          ref={searchInputRef}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
  );
}