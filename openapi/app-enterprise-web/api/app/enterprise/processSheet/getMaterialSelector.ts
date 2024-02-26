import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/工艺卡相关/getMaterialSelectorUsingPOST_2
*/
export default function fetchMethod(options: { params: { materialTypeList?: string[]; nameOrCode?: string; pageNo?: number; pageSize?: number; orders?: { column?: string; isAsc?: string }[] } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationMaterialMasterDataSelectionReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/processSheet/getMaterialSelector",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«物料主数据选择返回VO»» */
export interface IJSONResultPagingInformationMaterialMasterDataSelectionReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationMaterialMasterDataSelectionReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«物料主数据选择返回VO» */
export interface IPageInformationMaterialMasterDataSelectionReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IMaterialMasterDataSelectionIsReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 物料主数据选择返回VO */
export interface IMaterialMasterDataSelectionIsReturnedToVO {
    /** 物料id */
    id?: number;
    /** 物料名称 */
    name?: string;
    /** 物料编号 */
    code?: string;
    /** 物料类型 */
    type?: string;
    /** 物料类型描述 */
    typeDesc?: string;
    /** 单位 */
    unit?: string;
    /** 规格 */
    spec?: string;
    /** 版次号 */
    issueCode?: string;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 是否有bom */
    hasBom?: string;
}
