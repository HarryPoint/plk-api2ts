import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/仓位相关/getWarehouseListSelectionUsingPOST
export default function fetchMethod(data: IPositionTreeReturnsVO1) {
    return post<IJSONResultDTOForPagingInformationLocationQuery>({
      url: "/masterdata-service/warehouse/getWarehouseListSelection",
      data,
    });
}
// 仓位树返回VO_1
export interface IPositionTreeReturnsVO1 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // undefined
    nameOrCodeMatch: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«仓位查询DTO»»
export interface IJSONResultDTOForPagingInformationLocationQuery {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationLocationQueryDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«仓位查询DTO»
export interface IPageInformationLocationQueryDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IPositionQueryDTO[];
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
// 仓位查询DTO
export interface IPositionQueryDTO {
    // id
    id: number;
    // 仓位名称
    name: string;
    // 仓位编号
    code: string;
    // 仓库id
    storehouseId: number;
    // 仓库名称
    storehouseName: string;
    // 仓库编号
    storehouseCode: string;
    // 区域id
    areaId: number;
    // 区域名称
    areaName: string;
    // 区域编号
    areaCode: string;
    // 库存数量
    quantity: number;
}
