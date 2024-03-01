import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/流程任务相关/queryEmployeeListOfNextNodeUsingPOST
*/
export default function fetchMethod(options: { data: IPageBreaks4 }, extraOptions?: any) {
    return http<IJSONResultListEmployeeResponseObject>(
        {
            url: "/masterdata-service/flowPathTask/queryEmployeeListOfNextNode",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_4 */
export interface IPageBreaks4 {
    /** 动态表单记录 */
    dynamicFormRecord?: Record<string, Record<string, any>>;
    /** 导出字段集 */
    exportFields?: string[];
    /** 当前的工单ID */
    flowPathWorkOrderId?: string;
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 名称或编码 */
    nameOrCode?: string;
    /** 下个节点ID列表 */
    nextNodeIdList?: string[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«List«员工响应对象»» */
export interface IJSONResultListEmployeeResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IEmployeeResponseObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 员工响应对象 */
export interface IEmployeeResponseObject {
    /** 出生日期 */
    birthday?: number;
    /** 班组id */
    classGroupId?: string;
    /** 员工工号 */
    code?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 任职部门id */
    departmentId?: string;
    /** 任职部门名称 */
    departmentName?: string;
    /** 离职日期 */
    dimissionTime?: number;
    /** 学历 */
    educational?: EEmployeeResponseObject_educational;
    /** 邮箱 */
    email?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 入职日期 */
    entryTime?: number;
    /** 性别 */
    gender?: EEmployeeResponseObject_gender;
    /** 直属上级id */
    higherUserId?: string;
    /** id */
    id?: string;
    /** 手机号码 */
    mobilePhone?: string;
    /** 员工姓名 */
    name?: string;
    /** 籍贯 */
    nativePlace?: string;
    /** 任职职位id */
    positionId?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEmployeeResponseObject_educational {
    /** 小学 */
    PRIMARY = "PRIMARY",
    /** 初中 */
    JUNIOR = "JUNIOR",
    /** 高中 */
    HIGH = "HIGH",
    /** 大专 */
    COLLEGE = "COLLEGE",
    /** 本科 */
    UNDERGRADUATE = "UNDERGRADUATE",
    /** 研究生 */
    POSTGRADUATE = "POSTGRADUATE",
    /** 中技 */
    INTERMEDIATE_TECHNICAL = "INTERMEDIATE_TECHNICAL",
    /** 硕士 */
    MASTER = "MASTER",
    /** 中专 */
    TECHNICAL_SECONDARY = "TECHNICAL_SECONDARY"
}

export enum EEmployeeResponseObject_gender {
    /** 男 */
    MAN = "MAN",
    /** 女 */
    WOMAN = "WOMAN"
}
