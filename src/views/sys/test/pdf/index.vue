<template>
  <div>
    <Button type="primary" @click="download">下载</Button>
  </div>
</template>
<script lang="ts" setup>
  import { Button } from 'ant-design-vue';
  import html2canvas from 'html2canvas';
  import { jsPDF } from 'jspdf';

  const a4 = [595.28, 841.89];
  const padingX = 30;
  const padingY = 20;

  const download = async () => {
    const pdf = new jsPDF(undefined, 'pt', 'a4');
    const canvas = await html2canvas(document.body, {
      backgroundColor: '#fff',
      scale: 2,
    });
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const contentWidth = a4[0] - padingX * 2;
    // a4[0]/? = imgWidth/imgHeight
    const contentHeight = (a4[0] * imgHeight) / imgWidth;

    const pdfImg = canvas.toDataURL('image/jpeg', 1.0);
    pdf.addImage(pdfImg, 'JPEG', padingX, padingY, contentWidth, contentHeight);
    pdf.save('test.pdf');
  };
</script>
