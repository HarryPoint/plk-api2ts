import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/工艺路径相关/pageRoutingInfoUsingPOST
export default function fetchMethod(data: IProcessPathInformationPagingQueryDTO) {
    return post<IJSONResultPagingInformationProcessPathInformationObject['data']>({
      url: "/app-enterprise-web/api/app/enterprise/routing/pageRoutingInfo",
      data,
    });
}
// 工艺路径信息分页查询DTO
export interface IProcessPathInformationPagingQueryDTO {
    // 当前页面
    pageNo: number;
    // 工艺路径名称
    routingName: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 物料id
    materialId: number;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«工艺路径信息对象»»
export interface IJSONResultPagingInformationProcessPathInformationObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationProcessPathInformationObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«工艺路径信息对象»
export interface IPagingInformationProcessPathInformationObject {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IProcessPathInformationObject[];
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
// 工艺路径信息对象
export interface IProcessPathInformationObject {
    // 工艺路径id
    id: number;
    // 工艺路径名称
    name: string;
    // 工艺路径编号
    code: string;
    // 工艺步骤列表
    routingStepList: IProcessStepInformationObject[];
}
// 工艺步骤信息对象
export interface IProcessStepInformationObject {
    // 工序步骤id
    id: number;
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
}
