import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/标准工艺相关/getPageUsingPOST_29
export default function fetchMethod(data: IStandardProcessPagingQueryObject) {
    return post<IJSONResultPagingInformationStandardProcessPagingResponseObject['data']>({
      url: "/masterdata-service/standardTechnology/getPage",
      data,
    });
}
// 标准工艺分页查询对象
export interface IStandardProcessPagingQueryObject {
    // 当前页面
    pageNo: number;
    // 标准工艺状态列表
    statusList: string[];
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 未分类 -- Y 就是查未分类，为空或者N 不起作用
    unCategory: string;
    // 标准工艺名称 -- 模糊查询
    name: string;
    // 标准工艺分类id
    standardTechnologyCategoryIds: number[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«标准工艺分页响应对象»»
export interface IJSONResultPagingInformationStandardProcessPagingResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationStandardProcessPageResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«标准工艺分页响应对象»
export interface IPageInformationStandardProcessPageResponseObject {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IStandardProcessPagingResponseObject[];
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
// 标准工艺分页响应对象
export interface IStandardProcessPagingResponseObject {
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
    // id
    id: number;
    // 名称
    name: string;
    // 所属分类id
    standardTechnologyCategoryId: number;
    // 所属分类名称
    standardTechnologyCategoryName: string;
    // 状态
    status: string;
    // 缩略图
    thumbnail: string;
}
