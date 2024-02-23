import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/进出料记录管理/getMaterialActualQuantityPageUsingPOST
export default function fetchMethod(data: IMaterialOutputSearchVO, params: { enterpriseId: number }) {
    return http<IJSONResultPagingInformationMaterialOutputVO>({
        url: "/masterdata-service/moveInOutRecord/getMaterialActualQuantityPage",
        method: "post",
        data,
        params,
    });
}
// 物料产出搜索VO
export interface IMaterialOutputSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 工序步骤ids
    routingStepIds: number[];
    // 排序字段集
    orders: IPagingSortVO[];
    // 时间筛选 - 开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 时间筛选 - 结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«物料产出VO»»
export interface IJSONResultPagingInformationMaterialOutputVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationMaterialOutputVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«物料产出VO»
export interface IPagingInformationMaterialOutputVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IMaterialOutputVO[];
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
// 物料产出VO
export interface IMaterialOutputVO {
    // 物料id
    materialId: number;
    // 物料产出(出站总数量)
    actualQuantity: number;
}
