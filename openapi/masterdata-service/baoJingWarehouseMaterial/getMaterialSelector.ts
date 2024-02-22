import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/宝晶即时库存查询相关/getMaterialSelectorUsingPOST
export function fetchMethod(data: IBaojingReportMaterialSelectionQuery) {
    return post({
      url: "/masterdata-service/baoJingWarehouseMaterial/getMaterialSelector",
      data,
    });
}
// 宝晶报表物料选择查询
export interface IBaojingReportMaterialSelectionQuery {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSort[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 导出字段集
    exportFields: string[];
    // 物料编号/外部编码/物料名称查询
    searchValue: string;
}
// 分页排序
export interface IPagingSort {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«分页信息«宝晶报表物料选择响应»»
export interface IJSONResultPagingInformationBaoJingReportMaterialSelectionResponse {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationTreasureReportMaterialSelectionResponse;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«宝晶报表物料选择响应»
export interface IPageInformationTreasureReportMaterialSelectionResponse {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IBaojingReportMaterialSelectionResponse[];
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
// 宝晶报表物料选择响应
export interface IBaojingReportMaterialSelectionResponse {
    // 物料id
    materialId: number;
    // 物料编码
    materialCode: string;
    // 物料名称
    materialName: string;
    // 外部编码
    outsideCode: string;
    // 物料种类
    materialType: string;
    // 物料规格
    materialSpec: string;
    // 客户名称
    customerName: string;
}
