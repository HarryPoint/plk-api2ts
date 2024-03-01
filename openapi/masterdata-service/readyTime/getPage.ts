import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/准备期相关/getPageUsingPOST_25
*/
export default function fetchMethod(options: { data: IPreparationPeriodQueryVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPageInformationPreparationPeriodReturnsVO>(
        {
            url: "/masterdata-service/readyTime/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 准备期查询VO */
export interface IPreparationPeriodQueryVO {
    /** 编号 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工序id */
    processId?: string;
    /** 规则类型 */
    ruleType?: EPreparationPeriodQueryVO_ruleType;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«准备期返回VO»» */
export interface IJSONResultPageInformationPreparationPeriodReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationPreparationPeriodReturnVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«准备期返回VO» */
export interface IPagingInformationPreparationPeriodReturnVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationPreparationPeriodReturnVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationPreparationPeriodReturnVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IPreparationPeriodReturnVO[];
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
/** 准备期返回VO */
export interface IPreparationPeriodReturnVO {
    /** 编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 所属工序编号 */
    processCode?: string;
    /** 所属工序id */
    processId?: string;
    /** 所属工序名称 */
    processName?: string;
    /** 规则类型 */
    ruleType?: EPreparationPeriodReturnVO_ruleType;
    /** 规则类型描述 */
    ruleTypeDesc?: string;
    /** 耗时 */
    takeTime?: number;
}

export enum EPreparationPeriodQueryVO_ruleType {
    /** 产出物料相同 */
    EQUAL = "EQUAL",
    /** 产出物料不相同 */
    NOT_EQUAL = "NOT_EQUAL"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationPreparationPeriodReturnVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationPreparationPeriodReturnVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPreparationPeriodReturnVO_ruleType {
    /** 产出物料相同 */
    EQUAL = "EQUAL",
    /** 产出物料不相同 */
    NOT_EQUAL = "NOT_EQUAL"
}
