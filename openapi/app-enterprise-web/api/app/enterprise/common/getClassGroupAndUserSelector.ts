import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/公共相关/getClassGroupAndUserSelectorUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO1>(
        {
            url: "/app-enterprise-web/api/app/enterprise/common/getClassGroupAndUserSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«Id，名称，编号VO»»_1 */
export interface IJSONResultListIdNameNumberVO1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdNameNumberVO1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id，名称，编号VO_1 */
export interface IIdNameNumberVO1 {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
    /** 人员 */
    users?: IEmployeeResponseObject[];
}
/** 员工响应对象 */
export interface IEmployeeResponseObject {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 出生日期 */
    birthday?: number;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 员工工号 */
    code?: string;
    /** 员工姓名 */
    name?: string;
    /** 手机号码 */
    mobilePhone?: string;
    /** 班组id */
    classGroupId?: string;
    /** 入职日期 */
    entryTime?: number;
    /** 离职日期 */
    dimissionTime?: number;
    /** 性别 */
    gender?: EEmployeeResponseObject_gender;
    /** 学历 */
    educational?: EEmployeeResponseObject_educational;
    /** 籍贯 */
    nativePlace?: string;
    /** 任职部门id */
    departmentId?: string;
    /** 任职部门名称 */
    departmentName?: string;
    /** 任职职位id */
    positionId?: string;
    /** 直属上级id */
    higherUserId?: string;
    /** 邮箱 */
    email?: string;
}

export enum EEmployeeResponseObject_gender {
    /** 男 */
    MAN = "MAN",
    /** 女 */
    WOMAN = "WOMAN"
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
