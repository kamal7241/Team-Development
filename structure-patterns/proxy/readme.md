
# Agenda

- Anit Pattern vs Design Pattern
- What is Proxy
- Why We need Proxy Pattern
- How to implement Remote Proxy Pattern
  - Client
  - remote Object
  - Proxy
  - Communication bettween remote and Proxy (way , risks)
  - stub (client helper ) and skeleton (remote helper ( service) )
- Proxy Pattern Definition
- Diagram
- Types

# Anit Pattern

-

# Proxy Pattern

## Problem

- Gumball Machine
- Monitor
- remote

## Steps to solve

- remote object lives in another heap
- Create a proxy object as a local representation to a remote object

### Remote Service

- The remote interface defines the methods that a client can call remotely.
- both The Stub and actual service will implement this!
- handle all remote services exceptions
- arguments and return values to be primitive or serializable

### Stub Object ( proxy)

-

```js
sayHello(){
    return "hello world"
}
```

## Definition

- The Proxy Pattern provides a surrogate or placeholder for another object to control access to it.

## Uses

- Use the Proxy Pattern to create a representative object that controls access to
another object, which may be remote, expensive to create, or in need of securing.
- Formatting  , caching , security

## Diagram

## types

- a remote proxy controls access to a remote object.
- A virtual proxy controls access to a resource that is expensive to create.
- A protection proxy controls access to a resource based on access rights.

## References and More Links

### Articles

- <https://refactoring.guru/design-patterns/proxy#:~:text=Proxy%20is%20a%20structural%20design,through%20to%20the%20original%20object>.

### Videos

- <https://www.youtube.com/watch?v=NwaabHqPHeM>
- <https://www.youtube.com/watch?v=cHg5bWW4nUI>

### Books

- Headfirst Design Pattern
- Design Patterns: Elements of Reusable Object-Oriented Software  
