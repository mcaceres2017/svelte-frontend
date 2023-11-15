

<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  const { dataset } = data;
</script>

<div class="center-container">
    <div class="info-container">
      <div class="itemName">
        <div class="box"></div>
        <div class="title">{dataset.title}</div>
      </div>
  
      <div class="title">Information</div>
  
      <div class="parameter">
        <div class="box"></div>
        <div><strong>Version:</strong> {dataset.version}</div>
      </div>
  
      <div class="parameter">
        <div class="box"></div>
        <div><strong>Updated:</strong> {dataset.updated}</div>
      </div>
  
      <div class="parameter">
        <div class="box"></div>
        <div><strong>Created:</strong> {dataset.created}</div>
      </div>
  
      <div class="parameter">
        <div class="box"></div>
        <div><strong>Author:</strong> {dataset.author}</div>
      </div>
  
      <div class="parameter">
        <div class="box"></div>
        <div><strong>Oids:</strong> {dataset.oids.join(', ')}</div>
      </div>
  
      <div class="parameter">
        <div class="box"></div>
        <div><strong>Parameters:</strong> {dataset.parameters.join(', ')}</div>
      </div>
  
      <div class="parameter">
        <div class="box"></div>
        <div><strong>Size:</strong> {dataset.size}</div>
      </div>
    </div>
  
    <button class="update-button">Update</button>
  </div>
  

<style>
    /* Add any styling you need here */
    .center-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .update-button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #007bff; /* You can customize the color */
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  .title {
    font-size: 25px; /* Adjust as needed */
    font-weight: bold;
    margin-bottom: 20px;
  }
</style>
