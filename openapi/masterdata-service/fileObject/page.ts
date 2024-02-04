// 文件对象分页查询请求DTO
export interface I文件对象分页查询请求DTO {
    // 当前页面
    pageNo: number;
    // 文件来源
    fileForm: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSort[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 创建用户ID列表
    createUserIds: number[];
    // 导出字段集
    exportFields: string[];
    // 文件名
    name: string;
    // 文件分类ID列表
    fileCategoryIdList: number[];
    // 创建时间-开始
    createTimeBegin: string;
    // 创建时间-开始
    createTimeEnd: string;
}
// 分页排序
export interface IPagingSort {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«分页信息«文件对象分页查询响应DTO»»
export interface IJSONResult分页信息文件对象分页查询响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息文件对象分页查询响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«文件对象分页查询响应DTO»
export interface I分页信息文件对象分页查询响应DTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I文件对象分页查询响应DTO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 文件对象分页查询响应DTO
export interface I文件对象分页查询响应DTO {
    // 创建用户ID
    createUserId: number;
    // 创建用户名
    createUserName: string;
    // 创建部门ID
    createDeptId: number;
    // 创建部门名称
    createDeptName: string;
    // 更新部门ID
    updateDeptId: number;
    // 更新部门名称
    updateDeptName: string;
    // 创建时间
    createTime: string;
    // 更新用户ID
    updateUserId: number;
    // 更新用户名称
    updateUserName: string;
    // 更新时间
    updateTime: string;
    // ID
    id: number;
    // 文件名
    name: string;
    // 文件分类ID
    fileCategoryId: number;
    // 文件分类名称
    fileCategoryName: string;
    // 文件大小
    fileSize: number;
    // 文件来源
    fileForm: string;
    // 文件Key
    fileKeys: undefined[];
    // 权限列表
    permissionTypeList: string[];
}
