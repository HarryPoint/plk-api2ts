import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/准备期相关/getPageUsingPOST_26
*/
export default function fetchMethod(options: { data: IPreparationPeriodQueryVO }, extraOptions?: any) {
    return http<IJSONResultPageInformationPreparationPeriodReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/readyTime/getPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 准备期查询VO */
export interface IPreparationPeriodQueryVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 工序id */
    processId?: number;
    /** 名称 */
    name?: string;
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationPreparationPeriodReturnVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«准备期返回VO» */
export interface IPagingInformationPreparationPeriodReturnVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IPreparationPeriodReturnVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationPreparationPeriodReturnVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationPreparationPeriodReturnVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 准备期返回VO */
export interface IPreparationPeriodReturnVO {
    /** id */
    id?: number;
    /** 所属工序id */
    processId?: number;
    /** 所属工序名称 */
    processName?: string;
    /** 所属工序编号 */
    processCode?: string;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 规则类型 */
    ruleType?: EPreparationPeriodReturnVO_ruleType;
    /** 规则类型描述 */
    ruleTypeDesc?: string;
    /** 耗时 */
    takeTime?: number;
    /** 数据状态 */
    dataStatus?: number;
    /** 创建人 */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
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

export enum EPagingInformationPreparationPeriodReturnVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationPreparationPeriodReturnVO_hasNextPage {
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
