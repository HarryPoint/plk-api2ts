import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/员工相关/listStaffSelectorUsingPOST
*/
export default function fetchMethod(options: { data: INameNumberDTO }, extraOptions?: any) {
    return http<IJSONResultListEmployeeResponseObject>(
        {
            url: "/masterdata-service/employee/listStaffSelector",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 名称、编号DTO */
export interface INameNumberDTO {
    /** 名称or编号 */
    nameOrCode?: string;
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
