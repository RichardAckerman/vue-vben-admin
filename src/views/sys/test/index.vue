<template>
  <div>
    asfafsd
    <Button type="primary">按钮</Button>
  </div>
</template>
<script lang="ts" setup>
  import { Button } from 'ant-design-vue';
  import { Observable } from 'rxjs';

  // const promise = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve('Hello from a Promise!');
  //   }, 2000);
  // });

  // promise.then((value) => console.log(value));

  const observable = new Observable((observer) => {
    setTimeout(() => {
      observer.next('Hello from a Observable!');
    }, 2000);
  });

  observable.subscribe((value) => console.log(value));
</script>
