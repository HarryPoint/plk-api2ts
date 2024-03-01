import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检项/getPageUsingPOST_22
*/
export default function fetchMethod(options: { data: ICheckItemSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPageInformationVOIsReturned>(
        {
            url: "/masterdata-service/qualityInspectionItem/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质检项搜索VO */
export interface ICheckItemSearchVO {
    /** 编号 */
    code?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
    /** 名称 */
    name?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«质检项返回VO»» */
export interface IJSONResultPageInformationVOIsReturned {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationTheInspectionItemReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«质检项返回VO» */
export interface IPageInformationTheInspectionItemReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationTheInspectionItemReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationTheInspectionItemReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ITheInspectionItemIsReturnedToVO[];
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
/** 质检项返回VO */
export interface ITheInspectionItemIsReturnedToVO {
    /** 附件文件id */
    attachedFileId?: string;
    /** 附件文件key */
    attachedFileKey?: string;
    /** 附件文件名 */
    attachedFileName?: string;
    /** 附件文件完整路径 */
    attachedFileUrl?: string;
    /** 质检项编号 */
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
    /** 质检项名称 */
    name?: string;
    /** 质检方式 */
    qualityMethod?: ETheInspectionItemIsReturnedToVO_qualityMethod;
    /** 质检方式描述 */
    qualityMethodDesc?: string;
    /** 备注 */
    remark?: string;
    /** 选择方式 */
    selectType?: ETheInspectionItemIsReturnedToVO_selectType;
    /** 选择方式描述 */
    selectTypeDesc?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationTheInspectionItemReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationTheInspectionItemReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheInspectionItemIsReturnedToVO_qualityMethod {
    /** 数值比对 */
    NUMBER_COMPARE = "NUMBER_COMPARE",
    /** 人工判断 */
    ARTIFICIAL = "ARTIFICIAL"
}

export enum ETheInspectionItemIsReturnedToVO_selectType {
    /** 单选 */
    SELECTOR = "SELECTOR",
    /** 多选 */
    CHECKBOX = "CHECKBOX"
}
