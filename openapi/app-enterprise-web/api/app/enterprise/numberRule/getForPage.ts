import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/编码规则相关/getForPageUsingPOST_14
*/
export default function fetchMethod(options: { data: ICodeRulePagingQueryVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationEncodingRulePagingReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/numberRule/getForPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 编码规则分页查询VO */
export interface ICodeRulePagingQueryVO {
    /** 流程id */
    flowPathId?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 字段名称 */
    fieldName?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 流程表单序列值集合 */
    flowPathFormFiledSerialNoList?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«编码规则分页返回VO»» */
export interface IJSONResultPagingInformationEncodingRulePagingReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationEncodingRulePagingReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«编码规则分页返回VO» */
export interface IPagingInformationEncodingRulePagingReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITheEncodingRulePagingReturnsVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationEncodingRulePagingReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationEncodingRulePagingReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 编码规则分页返回VO */
export interface ITheEncodingRulePagingReturnsVO {
    /** 数据状态 0停用，1启用，-1已删除 */
    dataStatus?: number;
    /** 创建员工id */
    createUserId?: string;
    /** 创建员工名称 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新员工id */
    updateUserId?: string;
    /** 更新员工名称 */
    updateUsername?: string;
    /** 更新时间 */
    updateTime?: number;
    /** id */
    id?: string;
    /** 规则类型 */
    type?: ETheEncodingRulePagingReturnsVO_type;
    /** 业务类型 */
    businessType?: ETheEncodingRulePagingReturnsVO_businessType;
    /** 所属流程id */
    flowPathId?: string;
    /** 所属流程名称 */
    flowPathName?: string;
    /** 所属流程表单code */
    flowPathFormFiledCode?: string;
    /** 所属流程表单名称 */
    flowPathFormFiledName?: string;
    /** 所属流程表单序列值 */
    flowPathFormFiledSerialNo?: string;
    /** 是否是表格内字段 */
    isTableField?: ETheEncodingRulePagingReturnsVO_isTableField;
    /** 编码规则明细 */
    details?: IProcessFormFieldEncodingRuleDetailsVO[];
}
/** 流程表单字段编码规则明细VO */
export interface IProcessFormFieldEncodingRuleDetailsVO {
    /** id */
    id?: string;
    /** 设置类型 */
    type?: EProcessFormFieldEncodingRuleDetailsVO_type;
    /** 日期格式 - 用于日期 */
    dateFormat?: EProcessFormFieldEncodingRuleDetailsVO_dateFormat;
    /** 固定值 - 用于固定值 */
    fixValue?: string;
    /** 位数 - 用于流水 */
    ruleLength?: number;
    /** 初始值 - 用于流水 */
    startValue?: number;
    /** 递增值 - 用于流水 */
    stepValue?: number;
    /** 是否是编码依据 - 仅能配置一项为编码依据 */
    isCodeAccording?: EProcessFormFieldEncodingRuleDetailsVO_isCodeAccording;
    /** 所属流程表单code -- 针对引用字段类型 */
    flowPathCode?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledSerialNo?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledCode?: string;
    /** 规则ID */
    flowPathFormFieldCodeNumberRuleId?: string;
    /** 排序 */
    sort?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationEncodingRulePagingReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationEncodingRulePagingReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheEncodingRulePagingReturnsVO_type {
    /** 流程应用 */
    FLOW_PATH = "FLOW_PATH",
    /** 业务 */
    BUSINESS = "BUSINESS"
}

export enum ETheEncodingRulePagingReturnsVO_businessType {
    /** 生产任务 */
    PRODUCE_TASK = "PRODUCE_TASK",
    /** 盘点单 */
    STORAGE_TAKE_CHECK_TASK = "STORAGE_TAKE_CHECK_TASK"
}

export enum ETheEncodingRulePagingReturnsVO_isTableField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEncodingRuleDetailsVO_type {
    /** 固定值 */
    FIXED = "FIXED",
    /** 日期 */
    DATE = "DATE",
    /** 自动计数 */
    AUTO_NUMBER = "AUTO_NUMBER",
    /** 引用字段 */
    FLOW_PATH_FIELD = "FLOW_PATH_FIELD",
    /** ID的36进制 */
    ID36 = "ID36"
}

export enum EProcessFormFieldEncodingRuleDetailsVO_dateFormat {
    /** 年 */
    YEAR = "YEAR",
    /** 年月 */
    YEAR_MONTH = "YEAR_MONTH",
    /** 年月日 */
    YEAR_MONTH_DAY = "YEAR_MONTH_DAY",
    /** 月 */
    MONTH = "MONTH",
    /** 月日 */
    MONTH_DAY = "MONTH_DAY",
    /** 日 */
    DAY = "DAY"
}

export enum EProcessFormFieldEncodingRuleDetailsVO_isCodeAccording {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
