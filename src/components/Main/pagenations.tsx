const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  // const renderPagination = () => {
  //   const pages = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //     pages.push(
  //       <li
  //         key={i}
  //         className={`page-item ${currentPage === i ? 'active' : ''}`}
  //       >
  //         <a className="page-link" onClick={() => onPageChange(i)}>
  //           {i}
  //         </a>
  //       </li>,
  //     );
  //   }
  //   return <ul className="pagination">{pages}</ul>;
  // };

  return (
    <div>
      <div>
        <ul className="pagination">
          {new Array(totalPages).fill(0).map((item, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index ? 'active' : ''}`}
            >
              <a
                className="page-link"
                onClick={() => {
                  onPageChange(index);
                }}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
