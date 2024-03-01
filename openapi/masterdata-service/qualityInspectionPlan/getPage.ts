import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检方案/getPageUsingPOST_23
*/
export default function fetchMethod(options: { data: IInspectionSolutionSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationVOIsReturned>(
        {
            url: "/masterdata-service/qualityInspectionPlan/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质检方案搜索VO */
export interface IInspectionSolutionSearchVO {
    /** 编号 */
    code?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
    /** 物料id */
    materialId?: string;
    /** 名称 */
    name?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 质检分类id */
    qualityInspectionCategoryId?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«质检方案返回VO»» */
export interface IJSONResultPagingInformationVOIsReturned {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationTheInspectionSchemeReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«质检方案返回VO» */
export interface IPagingInformationTheInspectionSchemeReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationTheInspectionSchemeReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationTheInspectionSchemeReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ITheInspectionSolutionReturnsVO[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 质检方案返回VO */
export interface ITheInspectionSolutionReturnsVO {
    /** 附件文件id */
    attachedFileId?: string;
    /** 附件文件key */
    attachedFileKey?: string;
    /** 附件文件名 */
    attachedFileName?: string;
    /** 附件文件完整路径 */
    attachedFileUrl?: string;
    /** 质检方案编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 状态 */
    dataStatus?: number;
    /** id */
    id?: string;
    /** 版次号 */
    issueCode?: string;
    /** 质检项 */
    itemList?: IIdNameVO[];
    /** 物料集合 */
    materialList?: IMaterialMasterDataBasicInformationIsReturnedToVO[];
    /** 质检方案名称 */
    name?: string;
    /** 质检分类编号 */
    qualityInspectionCategoryCode?: string;
    /** 质检分类id */
    qualityInspectionCategoryId?: string;
    /** 质检分类名称 */
    qualityInspectionCategoryName?: string;
    /** 质检方式 */
    type?: ETheInspectionSolutionReturnsVO_type;
    /** 质检方式描述 */
    typeDesc?: string;
}
/** Id，名称VO */
export interface IIdNameVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
}
/** 物料主数据基础信息返回VO */
export interface IMaterialMasterDataBasicInformationIsReturnedToVO {
    /** 物料编号 */
    code?: string;
    /** 物料id */
    id?: string;
    /** 版次号 */
    issueCode?: string;
    /** 物料名称 */
    name?: string;
    /** 物料规格 */
    spec?: string;
    /** 库存可使用数 */
    storageUseQuantity?: number;
    /** 物料单位 */
    unit?: string;
    /** 计量单位id */
    unitId?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationTheInspectionSchemeReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationTheInspectionSchemeReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheInspectionSolutionReturnsVO_type {
    /** 全检 */
    ALL = "ALL",
    /** 比例抽检 */
    RADIO_SPOT_CHECK = "RADIO_SPOT_CHECK",
    /** 固定抽检 */
    FIX_SPOT_CHECK = "FIX_SPOT_CHECK"
}
