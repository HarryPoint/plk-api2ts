import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质检项/getPageUsingPOST_21
*/
export default function fetchMethod(options: { data: ICheckItemSearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultPageInformationVOIsReturned>(
        {
            url: "/masterdata-service/qualityInspectionItem/getPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 质检项搜索VO */
export interface ICheckItemSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 名称 */
    name?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationTheInspectionItemReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«质检项返回VO» */
export interface IPageInformationTheInspectionItemReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheInspectionItemIsReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationTheInspectionItemReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationTheInspectionItemReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 质检项返回VO */
export interface ITheInspectionItemIsReturnedToVO {
    /** id */
    id?: number;
    /** 质检项名称 */
    name?: string;
    /** 质检项编号 */
    code?: string;
    /** 质检方式 */
    qualityMethod?: ETheInspectionItemIsReturnedToVO_qualityMethod;
    /** 质检方式描述 */
    qualityMethodDesc?: string;
    /** 选择方式 */
    selectType?: ETheInspectionItemIsReturnedToVO_selectType;
    /** 选择方式描述 */
    selectTypeDesc?: string;
    /** 备注 */
    remark?: string;
    /** 附件文件id */
    attachedFileId?: number;
    /** 附件文件key */
    attachedFileKey?: string;
    /** 附件文件完整路径 */
    attachedFileUrl?: string;
    /** 附件文件名 */
    attachedFileName?: string;
    /** 状态 */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationTheInspectionItemReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationTheInspectionItemReturnsVO_hasNextPage {
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
