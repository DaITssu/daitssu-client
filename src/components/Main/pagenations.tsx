const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? 'active' : ''}`}
        >
          <a className="page-link" onClick={() => onPageChange(i)}>
            {i}
          </a>
        </li>,
      );
    }
    return <ul className="pagination">{pages}</ul>;
  };

  return <div>{renderPagination()}</div>;
};

export default Pagination;
