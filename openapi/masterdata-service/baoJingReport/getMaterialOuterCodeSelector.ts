import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/宝晶报表相关/getMaterialOuterCodeSelectorUsingPOST
export default function fetchMethod(data: IMaterialMasterDataSelectionListSearchVO, params: { enterpriseId: number }) {
    return http<IJSONResultPagingInformationMaterialMasterDataExternalCodeSelectReturnDTO>({
        url: "/masterdata-service/baoJingReport/getMaterialOuterCodeSelector",
        method: "post",
        data,
        params,
    });
}
// 物料主数据选择列表搜索VO
export interface IMaterialMasterDataSelectionListSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 物料名称/编号
    nameOrCode: string;
    // 物料类型数组
    materialTypeList: string[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«物料主数据外部编码选择返回DTO»»
export interface IJSONResultPagingInformationMaterialMasterDataExternalCodeSelectReturnDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationMaterialMasterDataExternalCodeSelectReturnDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«物料主数据外部编码选择返回DTO»
export interface IPageInformationMaterialMasterDataExternalCodeSelectReturnDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IMaterialMasterDataExternalCodeSelectReturnDTO[];
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
// 物料主数据外部编码选择返回DTO
export interface IMaterialMasterDataExternalCodeSelectReturnDTO {
    // 物料id
    id: number;
    // 物料名称
    name: string;
    // 物料编号
    code: string;
    // 物料类型
    type: string;
    // 物料类型描述
    typeDesc: string;
    // 单位
    unit: string;
    // 规格
    spec: string;
    // 版次号
    issueCode: string;
    // 库存可使用数
    storageUseCount: number;
    // 是否有bom
    hasBom: string;
    // 外部编码
    outsideCode: string;
}
